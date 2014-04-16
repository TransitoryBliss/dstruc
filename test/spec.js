var expect, dstruc, test_path;
expect = require('chai').expect;
dstruc = require('../dstruc.js');
test_path = process.cwd()+'/test';

describe('dstruc', function() {
    describe('#sync', function () {
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
});