import { subject$ } from '../observables/multicast';
import { obsFrom$, obsOf$ } from '../observables/unicast';
import { filter, multicast } from 'rxjs/operators';
import { observer1, observer2 } from '../observers';

export class SubsSubjects {

	static subSample() {
		// array de suscripciones, representan el recurso disponible, la ejecucion del observable
		const subscriptionsSubject = [];

		const subs1 = subject$
			.pipe(
				filter( n => n > 11)
			)
			.subscribe(observer1); // se suscribe el observer1
		subscriptionsSubject.push(subs1);

		const subs2 = subject$
			.pipe(
				filter( n => n < 10)
			)
			.subscribe(observer2); // se suscribe el observer1
		subscriptionsSubject.push(subs2);

		subject$.next('sarasa'); // se actualiza el estado del subject, y notifica
		subject$.next(21);
		subject$.next(7);

		subject$.complete();
		for (const subject of subscriptionsSubject) {
			subject.unsubscribe(); // se cierra la suscripcion
		}
	}

	// ------------------------------------------------------

	static subObserverParams() {
		// a la suscripcion del observable from([1,2]) se le podria pasar un subject
		// de esta forma no va a ser multicast, pero...
		const subFrom = obsFrom$.subscribe(subject$);
		subFrom.unsubscribe();
	}

	// ------------------------------------------------------

	static subMulticast() {
		// para utilizar un observable de tipo multicast, que al emitir un valor se propague por multiples observers generando una unica ejecucion ???? preguntar a jere
		// multicast() : retorna un observable que trabaja como un Subject al suscribirse, con una subclase ConnectableObservable con un metodo connect()
		const obsOfmulticast = obsOf$.pipe( multicast(subject$) );

		obsOfmulticast.subscribe(observer1);
		obsOfmulticast.subscribe(observer2);
		// es importante este metodo porque determina cuando comienza la ejecucion compartida del observable
		// a su vez este metodo retorna una subscripcion, la cual permite utilizar unsubscribe()
		const subOf = obsOfmulticast.connect();
		subOf.unsubscribe();
	}

}
