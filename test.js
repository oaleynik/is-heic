/**
 * Fixture HEIC file: https://github.com/nokiatech/heif_conformance/tree/master/conformance_files/C017.heic
 */

var assert = require('assert');
var readChunk = require('read-chunk');
var isHeic = require('./');

function check (filename, offset = 0, len = 24) {
	return isHeic(readChunk.sync(filename, offset, len));
}

it('should detect HEIC image from buffer', function () {
	assert(check('./fixture.heic'));
	assert(!check('./fixture.heic', 0, 20));
	assert(!check('./fixture.png'));
});

it('should detect HEIC image from Uint8Array', function () {
	var buf = new Uint8Array(readChunk.sync('./fixture.heic', 0, 24));
	assert(isHeic(buf));

	buf[23] = 0;
	assert(!isHeic(buf));
});
