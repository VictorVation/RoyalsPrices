var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var del = require('del');

// Copy Web Fonts To Dist
gulp.task('fonts', function () {
  return gulp.src(['src/font/**/*',])
    .pipe(gulp.dest('dist/font'))
    .pipe($.size({title: 'fonts'}));
});

gulp.task('clean', del.bind(null, ['dist']));

// Scan Your HTML For Assets & Optimize Them
gulp.task('html', function () {
  var jsFilter = $.filter("**/*.js");
  var cssFilter = $.filter("**/*.css");
  var htmlFilter = $.filter("**/*.html");
  var assets = $.useref.assets();

  return gulp.src('src/*.html')
    .pipe(assets)
    .on('error', console.error.bind(console))

    .pipe(jsFilter)
    .pipe($.uglify({preserveComments: 'some'}))
    .pipe(jsFilter.restore())

    .pipe(cssFilter)
    .pipe($.uncss({
      html: [
        'src/index.html'
      ]
    }))
    .pipe($.csso())
    .pipe(cssFilter.restore())

    .pipe($.rev())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace())

    // Output Files
    .pipe(gulp.dest('dist'))
    .pipe($.size({title: 'html'}));
});

// Build Production Files, the Default Task
gulp.task('default', ['clean'], function (cb) {
  runSequence(['html', 'fonts'], cb);
});
