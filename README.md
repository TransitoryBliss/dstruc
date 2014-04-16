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
		styles: {
			files: ['style.css'],
			dirs: {}
		},
                        javascript: {
                            files: ['jquery.js', 'backbone.js', 'underscore'.js', 'model.coffee'],
                            dirs: {}
                    }
	}
}
*/
```
You can also get the files in an object  with file extensions as the keys by passing true as the second argument:

```js
var ds = require('dstruc');
var structure = ds.sync('/path/to/dir', true);
/*
{
    files: [],
    dirs: {
        styles: {
            files: {
                css: ['style.css']
            },
            dirs: {}
        },
        javascript: {
            files: {
                js: ['jquery.js', 'backbone.js', 'underscore.js'],
                coffee: ['model.coffee']
            },
            dirs: {}
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