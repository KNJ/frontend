const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['pug', 'sass', 'js']);

gulp.task('pug', () =>
  gulp.src(['./src/pug/**/*.pug', '!./src/pug/**/_*.pug'])
    .pipe(pug({
      pretty: true,
    }))
    .pipe(gulp.dest('./dist'))
);

gulp.task('sass', () =>
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded',
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'))
);

gulp.task('js', () =>
  gulp.src('./src/js/**/*.js')
  .pipe(babel({
    presets: ['es2015'],
  }))
  .pipe(gulp.dest('./dist/js'))
);
