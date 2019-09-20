// observer : consume valor entregado por un observable
export const observer1 = {
	next: data => console.log(`observer 1: ${data}`),
	error: err => console.error(`observer 1 - err: ${err}`), // podria ser opcional
	complete: () => console.log('observer 1 done!') // podria ser opcional
};

export const observer2 = {
	next: data => console.log(`observer 2: ${data}`),
	error: err => console.error(`observer 2 - err: ${err}`), // podria ser opcional
	complete: () => console.log('observer 2 done!') // podria ser opcional
};
