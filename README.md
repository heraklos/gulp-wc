gulp-wc
======

A gulp plugin to just count lines of code passed from stream.

## Usage

First of all, install the `gulp-wc` plugin:

```shell
npm install gulp-wc
```

Furthurmore, add the plugin to your `gulpfile.js`:

```javascript
var wc = require('gulp-wc');

gulp.task('wc', function() {
	return gulp.src(['js/*.js', 'js2/*.js', 'js3/*.js','js4/*.js','js5/*.js','css/*.css'])
        .pipe(wc())
});
```

This would show the output like below:

```shell
[01:01:31] ===========gulp-wc output start============
[01:01:31] js/all.js :58 lines
[01:01:31] js/test.js :29 lines
[01:01:31] js2/all.js :58 lines
[01:01:31] js2/test.js :29 lines
[01:01:31] js3/all.js :58 lines
[01:01:31] js3/test.js :29 lines
[01:01:31] js4/all.js :58 lines
[01:01:31] js4/test.js :29 lines
[01:01:31] js5/all.js :58 lines
[01:01:31] js5/test.js :29 lines
[01:01:31] css/all.css :10 lines
[01:01:31] css/test.css :9 lines
[01:01:31] Total :454 lines
```

The output related to different parent directory, like "js" or "js2" in the example above, would be displayed with different color.

You can put this plugin's function in the 
middle of pipe chaining to see how many lines of code
each file has before being processed.