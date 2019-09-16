// import { alertMessage } from './modules/alert-message';
// import { consoleMsj } from './modules/console-message';

// console.log( alertMessage('message test :)') );
// console.log( consoleMsj() );

// ---------------------- Observables Pattern ----------------------
import { Observable } from 'rxjs';

// observable
const obs2$ = Observable.create(
	function subscribe(stream) {
		// observers
		stream.next(1);
		stream.next(2);
		setTimeout(() => {
			stream.next(3);
			stream.complete('Complete!');
		}, 3000);
	}
);

// subscription

// mode 1
// obs2$.subscribe(
// 	// observers
// 	data => console.log(data),
// 	err => console.log(err),
// 	() => console.log('done!')
// );

// mode 2
// obs2$.subscribe({
// 	// observers
// 	next(data) { console.log(data); },
// 	err(err) { console.error(err); },
// 	complete() { console.log('done!'); }
// });

// mode 3
// obs2$.subscribe({
// 	next: data => console.log(data),
// 	error: err => console.error(err),
// 	complete: () => console.log('done!')
// });

// mode 4
const IObs = {
	next: function (data) {
		console.log(data);
	},
	error: function(err) {
		console.error(err);
	},
	complete: function() {
		console.log('done!');
	}
};
obs2$.subscribe(IObs);
