var expect, dstruc, test_path;
expect = require('chai').expect;
dstruc = require('../dstruc.js');
test_path = process.cwd()+'/test';

describe('dstruc', function() {
    describe('#sync', function () {
        describe('no opts', function () {
            it('should return empty array and obj on empty folder', function () {
                var path, result;
                path = test_path + '/mock/empty';
                result = dstruc.sync(path);
                expect(result).to.deep.equal(
                {
                    files: [],
                    dirs: {}
                }
                );
            });

            it('should return structure on single level dir', function () {
                var path, result;
                path = test_path + '/mock/single_level';
                result = dstruc.sync(path);
                expect(result).to.deep.equal(
                    {
                        files: ['one.file.txt', 'two.file.txt'],
                        dirs: {}
                    }
                );
            });

            it('should return structure on multi level dir', function () {
                var path, result;
                path = test_path + '/mock/multi_level';
                result = dstruc.sync(path);
                expect(result).to.deep.equal(
                    {
                        files: [],
                        dirs: {
                            "level_one": {
                                files: ['level.one.file.txt'],
                                dirs: {
                                    "level_two": {
                                        files: ['level.two.file.txt'],
                                        dirs: {}
                                    },
                                    "another_level_two": {
                                        files: ['another.txt'],
                                        dirs: {}
                                    }
                                }
                            }
                        }
                    }
                );
            });
        });
        describe('with opts', function () {
            describe('recursive:false', function () {
                it('dirs should be an array and not an object', function () {
                     var path, result;
                    path = test_path + '/mock/multi_level';
                    result = dstruc.sync(path, { recursive: false });
                    expect(result.dirs).to.not.be.an('object');
                    expect(result.dirs).to.be.an('array');
                });

                it('should not parse sub dirs', function () {
                    var path, result;
                    path = test_path + '/mock/multi_level';
                    result = dstruc.sync(path, { recursive: false });
                    expect(result).to.deep.equal({ files: [], dirs: [ 'level_one' ] });
                });
            });
            describe('extensionAsKey:true', function () {
                it('files should be an object and not an array', function () {
                    var path, result;
                    path = test_path + '/mock/single_level';
                    result = dstruc.sync(path, {
                        extensionAsKey: true
                    });
                    expect(result.files).to.not.be.an('array');
                    expect(result.files).to.be.an('object');
                });

                it('should return extension as key', function () {
                    var path, result;
                    path = test_path + '/mock/single_level';
                    result = dstruc.sync(path, {
                        extensionAsKey: true
                    });
                    expect(result).to.deep.equal(
                        {
                            dirs: {},
                            files: {
                                txt: ['one.file.txt', 'two.file.txt' ]
                            }
                        }
                    );
                });
            });
        });
    });
});