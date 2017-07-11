const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const gutil = require('gulp-util')
const through = require('through2');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const sourcePath = './src/'

function clean() {
  return del([sourcePath + 'bundle.main.js']);
}

gulp.task('clean', clean);

gulp.task('js', function () {
  return gulp.src(sourcePath + 'main.js')
    .pipe(through.obj(function (chunk, encoding, callback) {
      webpack(webpackConfig, function (err, stats) {
        if (err) {
          throw new gutil.PluginError("webpack", err);
        }
        gutil.log("[webpack]", stats.toString({
          // output options
        }));
        callback(err, chunk);
      });
    }))
    .pipe(gulp.dest(sourcePath))
    .pipe(browserSync.stream());
})

gulp.task('browser-sync', () => {
  browserSync.init({
    port: 3030,
    server: {
      baseDir: "src",
      serveStaticOptions: {
        extensions: ["css", "html", "js"]
      }
    }
  });

  gulp.watch(sourcePath + 'bundle.main.js').on('change', browserSync.reload);
});

gulp.task('watch', () => {
  gulp.watch([sourcePath + '**/*.*', '!' + sourcePath + 'bundle.main.js'], ['js']);
});

gulp.task('dev', ['js', 'watch', 'browser-sync']);
