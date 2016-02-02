/*
**   Copyright (c) 2016 Takuya Kajiwara
**   Released under the MIT license
**   https://github.com/heraklos/gulp-wc/MIT-License.txt
*/

'use strict';

var es = require('event-stream');
var gutil = require('gulp-util');
var log = gutil.log;
var colors= gutil.colors;
var PluginError = gutil.PluginError;

function gulpWc() {

    var codeInUtf = "",
        linesOfCode = 0,
        wholeLinesOfCode = 0,
        stringForTotal = "Total";

    function countLines(file) {

        var path = file.path.split('/'),
            filename = path[path.length - 1];

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

    return es.through(countLines, printResult);
}

module.exports = gulpWc;
