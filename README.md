# dstruc

[![Build Status](https://travis-ci.org/shockwork/dstruc.svg?branch=master)](https://travis-ci.org/shockwork/dstruc)

Get directory structure and files from specified path in node.

## Installation

    $ npm install dstruc --save

## Usage

```js
var ds = require('dstruc');
var structure = ds.sync('/path/to/dir');
/*
{
	files: [],
	dirs: {
		dirname: {
			files: [],
			dirs: [Object] …
		}
	}
}
*/
```

## Testing

    $ npm test

### Todo
* Add async version

## License

BSD