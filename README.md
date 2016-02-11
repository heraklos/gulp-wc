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
-------------gulp-wc output start-------------
js/all.js :58 lines
js/test.js :29 lines
js2/all.js :58 lines
js2/test.js :29 lines
js3/all.js :58 lines
js3/test.js :29 lines
js4/all.js :58 lines
js4/test.js :29 lines
js5/all.js :58 lines
js5/test.js :29 lines
css/all.css :10 lines
css/test.css :9 lines
Total :454 lines
```

The output related to different parent directory, like "js" or "js2" in the example above, would be displayed with different color.

You can put this plugin's function in the 
middle of pipe chaining to see how many lines of code
each file has before being processed.