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
	gulp.src(['js/*.js'])
		.pipe(wc());
});
```

This would show the output like below:

```shell
[01:09:38] js/all.js :58 lines
[01:09:38] js/test.js :29 lines
[01:09:38] Total :87 lines
```

You can put this plugin's function in the 
middle of pipe chaining to see how many lines of code
each file has before being processed.