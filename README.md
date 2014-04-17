# dstruc

[![Build Status](https://travis-ci.org/shockwork/dstruc.svg?branch=master)](https://travis-ci.org/shockwork/dstruc)

__Quickly__ get directory structure and files from a specified path in node, with support for recursive operations.

## Installation

    $ npm install dstruc --save

## Usage

```js
var dstruc = require('dstruc');
var structure = dstruc.sync('/path/to/dir', {
    recursive: true,
    extensionAsKey: false
});
```

#### Options
__recursive__: Will traverse directories until it reaches the bottom. If set to false, directories of the top level will instead be put in an array.
__extensionAsKey__: Will put the files in an object with their extension as the key instead of an array.



## Testing

    $ npm test

### Todo
* Add async version

## License

BSD