var fs, format;
fs = require('fs'),
format = require('util').format;

/**
 * Get directory structure recursively (sync).
 * @example
 * 	var ds = require('dstruc');
 *  var structure = ds.sync('/path/to/folder');
 *  console.log(structure); // { files: [], dirs: { content: { files: [], dirs: [Object] } } }
 * @todo
 * 	Add async version
 */
var sync = function (dir) {
	var files, structure;
	files = fs.readdirSync(dir);
	structure = {files: [], dirs: {}};
	files.forEach(function (file, index) {
		if (file[0] !== '.') {
			var filepath = format('%s/%s', dir, file);
			var stat = fs.statSync(filepath);
			if (stat.isDirectory()) {
				structure['dirs'][file] = sync(filepath); // directory, parse it
			} else {
				structure['files'].push(file); // file, push it to array
			}
		}
	});
	return structure;
}

exports.sync = sync;