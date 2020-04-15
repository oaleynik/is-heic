'use strict';

module.exports = function (buffer) {
	if (!buffer || buffer.length < 24) {
		return false;
	}

	const [b1, b2, b3, b4] = Array.from(buffer.slice(20, 24));
	return (
		(b1 === 0x68 && b2 === 0x65 && b3 === 0x69 && b4 === 0x63) ||
		(b1 === 0x6d && b2 === 0x69 && b3 === 0x61 && b4 === 0x66)
	);
};
