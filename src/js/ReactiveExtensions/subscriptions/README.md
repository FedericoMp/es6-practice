## SUBSCRIPTION TO OBSERVABLE

> 1era forma

``` 
observable$.subscribe(
 	// observers
 	data => console.log(data),
 	err => console.log(err),
 	() => console.log('done!')
 );
```

---

> 2da forma - obj con funciones

``` 
 observable$.subscribe({
 	// observers
 	next(data) { console.log(data); },
 	err(err) { console.error(err); },
 	complete() { console.log('done!'); }
 });
```

---

> 3era forma - obj con metodos y arrow functions
```
 observable$.subscribe({
 	next: data => console.log(data),
 	error: err => console.error(err),
 	complete: () => console.log('done!')
 });
```

---

> 4ta forma - observer por parametro
observer : consume valor entregado por un observable

```
 const observer = {
 		next: data => console.log(`observer 1: ${data}`),
 		error: err => console.error(`observer 1 - err: ${err}`), // podria ser opcional
 		complete: () => console.log('observer 1 done!') // podria ser opcional
	};
```
```
const subscriptionObservable = observable$ // stream: sujeto que se observa
	.pipe(// pipe para concatenar operators: retornan un nuevo observable sin modificar el observable existente
		map(n => n * 10), // aplica func a cada valor
		filter(n => n > 10), // los flitra
		reduce((x,y) => x + y) // reduce a un solo elemento
	)
	.subscribe(observer); // cuando el observador se suscribe, se ejecuta y produce valores a lo largo del tiempo, de forma asincrona o sincrona

```
