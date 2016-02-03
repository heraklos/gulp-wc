'use strict';

var es = require('event-stream');
var gutil = require('gulp-util');
var _ = require('lodash');
var log = gutil.log;
var colors= gutil.colors;
var PluginError = gutil.PluginError;

function gulpWc() {

    var codeInUtf = "",
        rootDir = "",
        linesOfCode = 0,
        wholeLinesOfCode = 0,
        stringForTotal = "Total";

    function countLines(file) {

        rootDir = rootDir ? rootDir : pathToRootDir(file);

        var path = file.path.split('/'),
            indexOfRootDir = _.findIndex(path, function(p) {return p == rootDir}),
            filename = path.slice(indexOfRootDir+1, path.length).join('/');

        if (file.isNull()) {
            throw new PluginError('gulp-wc', 'Missing file for gulp-wc');
        }

        codeInUtf = file.contents.toString('utf8');
        linesOfCode = codeInUtf.split('\n').length;
        wholeLinesOfCode += linesOfCode;

        printResult(filename);

    }

    function printResult(filename) {
        filename = filename ? filename : stringForTotal;
        var lines = filename !== stringForTotal ? linesOfCode : wholeLinesOfCode;
        log(colors.green(filename +" :" + lines + " lines"));

    }

    function pathToRootDir(file) {
        var path = file.cwd.split('/');
        return path[path.length - 1];
    }

    return es.through(countLines, printResult);
}

module.exports = gulpWc;
