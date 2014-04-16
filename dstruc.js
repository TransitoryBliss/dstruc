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
	structure = { dirs: {} };
            structure.files = (extensionAsKey) ? {} : [];
	files.forEach(function (file, index) {
		if (file[0] !== '.') {
			var filepath = format('%s/%s', path, file);
			var stat = fs.statSync(filepath);
			if (stat.isDirectory()) {
				structure.dirs[file] = sync(filepath); // directory, parse it
			} else {
                                        if (extensionAsKey) {
                                            var ext = file.split('.')
                                            ext = ext[ext.length-1];
                                            if (!structure.files[ext]) structure.files[ext] = [];
                                            structure.files[ext].push(file);
                                        } else {
                                            structure.files.push(file); // file, push it to array
                                        }
			}
		}
	});
	return structure;
}

exports.sync = sync;