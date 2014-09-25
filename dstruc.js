var fs = require('fs')
  , format = require('util').format
  , mixin = require('utils-merge');

/**
* Get directory structure recursively (sync).
* @param {String}  path          path
* @param [Object] options
	extensionAsKey: boolean [false],
	recursive: boolean [true]
* @return {Object} structure
*/
var sync = function (path, options) {
 	var files, defaults, structure, recursive, extensionAsKey;

 	defaults = { extensionAsKey: false, recursive: true };

 	options = mixin(defaults, options);

 	recursive = options.recursive;
 	extensionAsKey = options.extensionAsKey;

 	structure = {};
 	structure.files = (extensionAsKey) ? {} : [];
 	structure.dirs = (recursive) ? {} : [];

 	// Loop through all files specified by @path
 	fs.readdirSync(path).forEach(function (file, index) {
 		var filepath;
 		// Do not parse '.'
 		if (file[0] !== '.') {
 			// the current file´s path (interpolation for ease of use..)
 			filepath = format('%s/%s', path, file);
 			// Use fs.stat to determine if directory or file
 			if (fs.statSync(filepath).isDirectory()) {
 				if (recursive) { // if option.recursive === true, recursively call self to parse directory
					structure.dirs[file] = sync(filepath);
				} else { // option.recursive === false, just append name to dirs array
					structure.dirs.push(file);
				}
			} else {
				// it's a file if in here...
				if (extensionAsKey) { // if options.extensionAsKey === true, add to object
					var ext = file.split('.');
					ext = ext[ext.length-1]; // get last value of array (the files extension)
					structure.files[ext] = structure.files[ext] || [];
					structure.files[ext].push(file);
				} else { // if options.extensionAsKey === false, just push it in to array..
					structure.files.push(file);
				}
			}
		}
	});

 	return structure;
}

exports.sync = sync;