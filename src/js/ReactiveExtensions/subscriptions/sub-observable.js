import { observable$ } from '../observables/unicast';
import { filter, map, reduce } from 'rxjs/operators';
import { observer1 } from '../observers';

export class SubsObservables {

	static subSample() {
		// la escucha del stream(secuencia de evt ordenados en el time)
		// valores retornados por el observable: 1, 2, 3
		const subscriptionObservable = observable$ // stream: sujeto que se observa
			.pipe(// pipe to link operators: retornan un nuevo observable sin modificar el observable existente
				map(n => n * 10), // aplica func a cada valor
				filter(n => n > 10), // los flitra
				reduce((x,y) => x + y) // reduce a un solo elemento
			)
			.subscribe(observer1); // cuando el observador se suscribe, se ejecuta y produce valores a lo largo del tiempo, de forma asincrona o sincrona

		// deshace del recurso obtenido por la subscripcion; cancela la ejecucion del observable
		subscriptionObservable.unsubscribe();
	}

}
