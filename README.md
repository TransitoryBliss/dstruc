# dstruc

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

__Install mocha__

    $ npm install -g mocha

__Run tests__

    $ npm test

### Todo
* Add async version

## License

BSD