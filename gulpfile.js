const browserSync = require('browser-sync').create();
const del = require('del');
const gulp = require('gulp');
const gutil = require('gulp-util')
const through = require('through2');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const sourcePath = './src/'

const paths = {
  bundle: './src/bundle.main.js',
}

function clean() {
  return del([sourcePath + 'bundle.main.js'])
}

gulp.task('clean', clean);

gulp.task('webpack', callback => {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      throw new gutil.PluginError("webpack", err)
    }
    gutil.log("[webpack]", stats.toString())

    callback()
  })
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

  gulp.watch(paths.bundle).on('change', browserSync.reload)
})

gulp.task('watch', () => {
  gulp.watch(['./src/**/*.*', '!' + paths.bundle, '!' + paths.bundle + '.map'], ['webpack'])
})

gulp.task('dev', ['webpack', 'watch', 'browser-sync'])
