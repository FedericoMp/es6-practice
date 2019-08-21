const assert = require('chai').assert;
const alertMessage = require('./modules/alert-message');
const consoleMessage = require('./modules/console-message');

describe.only('Test module: main module', () => {
	describe('#app', () => {
		it('`alertMessage()` is neither `null` or `undefined`', () => {
			assert.exists(alertMessage());
		});
		it('`consoleMessage()` is neither `null` or `undefined`', () => {
			assert.exists(consoleMessage());
		});
	});
});