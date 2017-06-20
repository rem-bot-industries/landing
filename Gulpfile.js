const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');

gulp.task('default', ['css', 'pug']);

// CSS task, compiles SCSS into CSS in the assets directory
gulp.task('css', () => {
  gulp.src('./src/scss/styles.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

// Pug task, compiles pug templates into root directory of repository
gulp.task('pug', () => {
  gulp.src('./src/views/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./'));
});

// Watch task, watches css and pug files and runs tasks on changes
gulp.task('watch', () => {
  gulp.watch('./src/scss/**/*', ['css']);
  gulp.watch('./src/views/**/*', ['pug']);
});
