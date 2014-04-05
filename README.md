# dstruc

Get directory structure and files from specified path in node.

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

### Todo
* Add tests
* Add async version

## License

BSD