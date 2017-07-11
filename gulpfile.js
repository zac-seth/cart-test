const browserSync = require('browser-sync').create();
const del = require('del');
const path = require('path');
const gulp = require('gulp');
const gutil = require('gulp-util')
const sourcemaps = require('gulp-sourcemaps');
const through = require('through2');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const sourcePath = './src/'

function clean() {
  return del([sourcePath + 'bundle.main.js']);
}

gulp.task('clean', clean);

gulp.task('js', function() {
  gutil.log("[gulp:js] running")
  return gulp.src(sourcePath + 'main.js')
    .pipe(sourcemaps.init())
    .pipe(through.obj(function(chunk, encoding, callback) {
      gutil.log("[gulp:js] webpack invoked")
      webpack(webpackConfig, function (err, stats) {
        gutil.log("[gulp:js] webpack completed")
        if (err) throw new gutil.PluginError("webpack", err);
          gutil.log("[webpack]", stats.toString({
          // output options
        }));
        callback(err, chunk);
      });
    }))
    .pipe(sourcemaps.write(sourcePath))
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

  gulp.watch(sourcePath + 'src/bundle.main.js').on('change', browserSync.reload);
});

gulp.task('watch', () => {
    gulp.watch([sourcePath + '**/*.*', '!' + sourcePath + 'src/bundle.main.js'], ['js']);
});

gulp.task('dev', ['js', 'watch', 'browser-sync']);
