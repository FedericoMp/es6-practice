import { Observable, from, of } from 'rxjs';

// observable > coleccion lazy de multiples valores, una ejecucion independiente para cada observer suscrito | Unicast
export const observable$ = Observable.create(
	// funciones que se ejecutan cuando se emite un valor (next, error, complete)
	function subscribe(subscriber) {
		try	{
			// Subscriber > para implementar operators
			subscriber.next(1);
			subscriber.next(2);

			// throw new Error('Resource 404!');
			// eslint-disable-next-line no-unreachable
			setTimeout(() => {
				subscriber.next(3);
				subscriber.complete('Complete!');
			}, 3000);

		} catch (err) {
			subscriber.error(`Oops!: ${err}`);
		} finally {
			subscriber.complete('Complete!');
		}
	}
);

// retorna un observable de los valores que se le pasan por param. coleccion
export const obsFrom$ = from([32,2]);
export const obsOf$ = of(100,200,300);
