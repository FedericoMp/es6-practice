import { observable$, subject$, obsFrom$, obsOf$ } from './modules/super-power';
import { filter, map, reduce, multicast } from 'rxjs/operators';

// SUBSCRIPTION TO OBSERVABLE

// mode 1 - mas utilizado
// obs2$.subscribe(
// 	// observers
// 	data => console.log(data),
// 	err => console.log(err),
// 	() => console.log('done!')
// );

//------------------------------------------------------------

// mode 2 - obj con funciones
// obs2$.subscribe({
// 	// observers
// 	next(data) { console.log(data); },
// 	err(err) { console.error(err); },
// 	complete() { console.log('done!'); }
// });

//------------------------------------------------------------

// mode 3 - obj con metodos y arrow functions
// obs2$.subscribe({
// 	next: data => console.log(data),
// 	error: err => console.error(err),
// 	complete: () => console.log('done!')
// });

//------------------------------------------------------------

// mode 4 - observer por parametro
// observer : consume valor entregado por un observable
const observer1 = {
	next: data => console.log(`observer 1: ${data}`),
	error: err => console.error(`observer 1 - err: ${err}`), // podria ser opcional
	complete: () => console.log('observer 1 done!') // podria ser opcional
};

const observer2 = {
	next: data => console.log(`observer 2: ${data}`),
	error: err => console.error(`observer 2 - err: ${err}`), // podria ser opcional
	complete: () => console.log('observer 2 done!') // podria ser opcional
};

// comentar la seccion del observable para probar el funcionamiento del subject*****
// la escucha del stream(secuencia de evt ordenados en el time)
// valores retornados por el observable: 1, 2, 3
//const subscriptionObservable = observable$ // stream: sujeto que se observa
//.pipe(// pipe to link operators: retornan un nuevo observable sin modificar el observable existente
//map(n => n * 10), // aplica func a cada valor
//filter(n => n > 10), // los flitra
//reduce((x,y) => x + y) // reduce a un solo elemento
//)
//.subscribe(observer1); // cuando el observador se suscribe, se ejecuta y produce valores a lo largo del tiempo, de forma asincrona o sincrona

// deshace del recurso obtenido por la subscripcion; cancela la ejecucion del observable
// subscriptionObservable.unsubscribe();

//------------------------------------------------------------

// SUBSCRIPTION TO SUBJECT
// array de suscripciones, representan el recurso disponible, la ejecucion del observable
// const subscriptionsSubject = [];

// // internamente en el subject al suscribirse no invoca una nueva ejecucion, registra los observers en una lista
// const subs1 = subject$
// 	.pipe(
// 		filter( n => n > 11)
// 	)
// 	.subscribe(observer1); // se suscribe el observer1
// subscriptionsSubject.push(subs1);

// const subs2 = subject$
// 	.pipe(
// 		filter( n => n < 10)
// 	)
// 	.subscribe(observer2); // se suscribe el observer1
// subscriptionsSubject.push(subs2);

// subject$.next('sarasa'); // se actualiza el estado del subject, y notifica
// subject$.next(21);
// subject$.next(7);

// --- a la suscripcion del observable from([1,2]) se le podria pasar un subject
// de esta forma no va a ser multicast, pero...
// const subFrom = obsFrom$.subscribe(subject$);

// para utilizar un observable de tipo multicast, que al emitir un valor se propague por multiples observers generando una unica ejecucion ???? preguntar a jere
// multicast() : retorna un observable que trabaja como un Subject al suscribirse, con una subclase ConnectableObservable con un metodo connect()
const obsOfmulticast = obsOf$.pipe(multicast(subject$));

obsOfmulticast.subscribe(observer1);

obsOfmulticast.subscribe(observer2);
// es importante este metodo porque determina cuando comienza la ejecucion compartida del observable
// a su vez este metodo retorna una subscripcion, la cual permite utilizar unsubscribe()
const subOf = obsOfmulticast.connect();
subOf.unsubscribe();
// ---

// subject$.complete();
// for (const subject of subscriptionsSubject) {
// 	subject.unsubscribe(); // se cierra la suscripcion
// }

// subFrom.unsubscribe();
