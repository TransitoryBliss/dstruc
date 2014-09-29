# dstruc

[![Build Status](https://travis-ci.org/shockwork/dstruc.svg?branch=master)](https://travis-ci.org/shockwork/dstruc)

### Note on tests
 The tests might fail on travis due to deepEqual matching the index on arrays; this might cause a missmatch with FS and the expected output. I will look into a better solution when possible.

__Quickly__ get directory structure and files from a specified path in node, with support for recursive operations.

## Installation

    $ npm install dstruc --save

## Usage

```js
var dstruc = require('dstruc');
var structure = dstruc.sync('/path/to/dir');
console.log(structure); 
/* 
{ files: [ 'level.one.file.txt' ],
  dirs:
   { another_level_two: { files: [Object], dirs: {} },
     level_two: { files: [Object], dirs: {} } } }
*/

var structureWithExtensions = dstruc.sync('/another/path/to/dir', { extensionAsKey: true });
console.log(structureWithExtensions);
/*{ files: { txt: [ 'one.file.txt', 'two.file.txt' ] }, dirs: {} }*/
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
