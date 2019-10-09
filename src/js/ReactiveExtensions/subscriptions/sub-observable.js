// import { observable$ } from '../observables/unicast';
// import { filter, map, reduce } from 'rxjs/operators';
// import { observer1 } from '../observers';
import {Observable,fromEvent} from 'rxjs';

export class SubsObservables {

	static subSample() {
		// la escucha del stream(secuencia de evt ordenados en el time)
		// valores retornados por el observable: 1, 2, 3
		// const subscriptionObservable = observable$ // stream: sujeto que se observa
		// 	.pipe(// pipe to link operators: retornan un nuevo observable sin modificar el observable existente
		// 		map(n => n * 10), // aplica func a cada valor
		// 		filter(n => n > 10), // los flitra
		// 		reduce((x,y) => x + y) // reduce a un solo elemento
		// 	)
		// 	.subscribe(observer1); // cuando el observador se suscribe, se ejecuta y produce valores a lo largo del tiempo, de forma asincrona o sincrona

		// // deshace del recurso obtenido por la subscripcion; cancela la ejecucion del observable
		// subscriptionObservable.unsubscribe();

		const btn = document.getElementById('btn');
		const status = document.getElementById('status');
		const data = document.getElementById('data');

		const ob$ = fromEvent(btn, 'click');

		ob$.subscribe(
			() => {

				status.innerText = 'Loading...';

				const observer = {
					next: (data) => {
						console.log(data);
					},
					error: (err) => {
						if (err !== undefined) {
							console.log(err);
							status.innerText = err;
						}
					},
					complete: () => {
						status.innerText = 'Request completed, succesfully!';
					}
				};

				const ob2$ = new Observable(
					subscriber => {
						const urls = [
							{ url: 'https://reqres.in/api/users?page=2', tag:'res 200'},
							{ url: 'https://reqres.in/api/users/23', tag:'res 404'},
							{ url: 'https://developer.mozilla.org/', tag:'res 0'},
						];

						const xhr = new XMLHttpRequest();
						xhr.open('get', urls[0].url, true);
						xhr.send();
						xhr.onload = () => {
							if (xhr.status >= 400) {
								setTimeout(() => {
									data.innerText = `\nOps! response from: ${urls[0].url}\n with status: ${xhr.status}, something wrong was happened\n ${xhr.response}`;
									subscriber.error('Request completed with errors');
								}, 2000);
							} else {
								setTimeout(() => {
									data.innerText = `\nResponse from: ${urls[0].url}\n with status: ${xhr.status}\n loaded:\n ${xhr.response}`;
									subscriber.next(`\nResponse from: ${urls[0].url} | with status: ${xhr.status} | Data loaded :)`);
								}, 2000);
								setTimeout(() => {
									subscriber.complete();
								}, 2000);
							}
						};
						xhr.onerror = () => {
							data.innerText = `\nResponse from: ${urls[0].url}\n with status: ${xhr.status}\n something wrong was happened\n ${xhr.response}`;
							subscriber.error('xhr error, execution stopped');
						};
					}
				);
				ob2$.subscribe(observer);
			});

	}

}
