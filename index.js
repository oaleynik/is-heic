'use strict';

module.exports = function (buffer) {
	if (!buffer || buffer.length < 24) {
		return false;
	}

	return buffer[20] === 0x68 && buffer[21] === 0x65 && buffer[22] === 0x69 && buffer[23] === 0x63;
};
