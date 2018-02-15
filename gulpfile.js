const gulp = require('gulp');
const sass = require('gulp-sass');
const watchSass = require('gulp-watch-sass');

gulp.task('sass', () =>
  gulp.src('node_modules/material-components-web/material-components-web.scss')
  .pipe(sass({
    includePaths: ['./node_modules/']
  }))
  .pipe(gulp.dest('assets/css'))
);

gulp.task("sass:watch", () => 
  watchSass([
    './node_modules/material-components-web/material-components-web.scss'
  ], 
    {includePaths: ['./node_modules/']})
  .pipe(sass({
    includePaths: ['./node_modules/']
  }))
  .pipe(gulp.dest("assets/css"))
);
