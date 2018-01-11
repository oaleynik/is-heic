# is-heic

> Check if a Buffer/Uint8Array is a HEIC image (inspired by [is-jpg](https://github.com/sindresorhus/is-jpg))


## Install

```sh
$ npm install --save is-heic
```


## Usage

##### Node.js

```js
var readChunk = require('read-chunk'); // npm install read-chunk
var isHeic = require('is-heic');
var buffer = readChunk.sync('unicorn.heic', 0, 24);

isHeic(buffer);
//=> true
```

##### Browser

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'unicorn.heic');
xhr.responseType = 'arraybuffer';

xhr.onload = function () {
	isHeic(new Uint8Array(this.response));
	//=> true
};

xhr.send();
```


## API

### isHeic(buffer)

Accepts a Buffer (Node.js) or Uint8Array.

It only needs the first 24 bytes.


## License

MIT © [Oleh Aleinyk](https://github.com/oaleynik)
