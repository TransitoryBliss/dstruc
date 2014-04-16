var fs, format;
fs = require('fs'),
format = require('util').format;

/**
 * Get directory structure recursively (sync).
 * @param {String}  Path                        path
 * @param {Boolean} extensionAsKey     files is object instead of with extension as key.
 * @todo
 * 	Add async version
 */
var sync = function (path, extensionAsKey) {
	var files, structure;
	files = fs.readdirSync(path);
	structure = {files: [], dirs: {}};
	files.forEach(function (file, index) {
		if (file[0] !== '.') {
			var filepath = format('%s/%s', path, file);
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