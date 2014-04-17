var fs, format;
fs = require('fs'),
format = require('util').format;

/**
 * Get directory structure recursively (sync).
 * @param {String}  path          path
 * @param [Object] options
        extensionAsKey: Boolean [false],
        recursive: boolean [true]
 * @return {Object} structure
 */
var sync = function (path, options) {
  var files, structure, recursive, extensionAsKey;

  options = options || {};

  recursive = (options.recursive === false) ? false : true;
  extensionAsKey = (options.extensionAsKey === true) ? true : false;

  files = fs.readdirSync(path);
  structure = {};
  structure.files = (extensionAsKey) ? {} : [];
  structure.dirs = (recursive) ? {} : [];

  files.forEach(function (file, index) {
    var stat, filepath;
    if (file[0] !== '.') {

    filepath = format('%s/%s', path, file);
    stat = fs.statSync(filepath);
    if (stat.isDirectory()) {
      if (recursive)
        structure.dirs[file] = sync(filepath); // directory, parse it
      else
        structure.dirs.push(file);
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