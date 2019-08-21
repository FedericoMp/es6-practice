const assert = require('chai').assert;
const alertMessage = require('./alert-message');

// use describe.only to test only 'this' one.
describe('Test module: alert message', () => {
	describe('#alertMessage', () => {
		it('should return `not message` if not msg is passed', () => {
			let msg = alertMessage();
			assert.equal(msg, 'not message');
		});
	});
});