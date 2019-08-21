const assert = require('chai').assert;
const consoleMsj = require('./console-message');

describe('Test module: console message', () => {
	describe('#consoleMsj', () => {
		it('should return `console not message` if msg is empty', () => {
			let msg = consoleMsj();
			assert.equal(msg, 'console not message');
		});
	});
});