const gulp = require('gulp');
const gzip = require('gulp-gzip');
const nano = require('gulp-cssnano');
const postcss = require('gulp-postcss');
const postcsscssnext = require('postcss-cssnext');
const postcssimport = require('postcss-import');
const rename = require('gulp-rename');
const size = require('gulp-size');
const stylelint = require('gulp-stylelint');

const files = ['./src/fortune.css'];
const postcssAutoprefix = [
  postcssimport(),
  postcsscssnext({
    browsers: ['last 2 versions'],
    rem: false,
    customProperties: false,
  }),
];

// Build
gulp.task('build', ['build: autoprefixed']);

// Build autoprefixed version
gulp.task('build: autoprefixed', () =>
  gulp
    .src(files)
    .pipe(postcss(postcssAutoprefix))
    .pipe(nano())
    .pipe(rename('fortune.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(size({ showFiles: true }))
    .pipe(gzip())
    .pipe(rename('fortune.css.gz'))
    .pipe(gulp.dest('./dist'))
    .pipe(size({ showFiles: true, gzip: true }))
);

// Lint
gulp.task('lint', ['default'], () =>
  gulp
    .src('./dist/fortune.css')
    .pipe(stylelint({ reporters: [{ formatter: 'string', console: true }] }))
);

// Report csslint after a build
gulp.task('test', ['lint']);

// Watch for css changes
gulp.task('watch', () => gulp.watch('./src/*.css', ['default']));
