'use strict';

const os = require('os');
const path = require('path');

module.exports = () => {
	const prefsJsonPath = path.join(os.homedir(), '/Library/Application Support/Alfred/prefs.json');

	try {
		return require(prefsJsonPath).current;
	} catch (error) {
		throw new Error(`Alfred 4 preferences not found at location ${prefsJsonPath}`);
	}
};
