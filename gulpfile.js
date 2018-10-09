const gulp = require('gulp');
const gzip = require('gulp-gzip');
const nano = require('gulp-cssnano');
const postcss = require('gulp-postcss');
const postcsspresetenv = require('postcss-preset-env');
const postcssimport = require('postcss-import');
const rename = require('gulp-rename');
const size = require('gulp-size');
const stylelint = require('gulp-stylelint');
const fortune = ['./src/fortune.css'];
const lab = ['./src/lab.css'];
const fortuner = ['./src/fortuner.css'];

const postcssRegular = [
  postcssimport(),
  postcsspresetenv({
    browsers: ['']
  })
];
const postcssPrefix = [
  postcssimport(),
  postcsspresetenv({
    browsers: ['last 2 versions']
  })
];
const postcssLab = [
  postcssimport(),
  postcsspresetenv({
    browsers: ['last 2 versions']
  })
];
const postcssFortuner = [
  postcssimport(),
  postcsspresetenv({
    browsers: ['last 2 versions']
  })
];


// Build
gulp.task('build', ['build: regular', 'build: prefixed', 'build: lab', 'build: fortuner']);

// Build vanilla version
gulp.task('build: regular', () =>
	gulp
		.src(fortune)
		.pipe(postcss(postcssRegular))
		.pipe(rename("fortune.css"))
		.pipe(gulp.dest("./dist"))
		.pipe(size({ showFiles: true }))
		.pipe(nano())
		.pipe(rename("fortune.min.css"))
		.pipe(gulp.dest("./dist"))
		.pipe(size({ showFiles: true }))    
		.pipe(gzip())
		.pipe(rename("fortune.min.css.gz"))
		.pipe(gulp.dest("./dist"))
		.pipe(size({ showFiles: true, gzip: true }))
);

// Build autoprefixed version
gulp.task('build: prefixed', () =>
  gulp
    .src(fortune)
    .pipe(postcss(postcssPrefix))
    .pipe(rename('fortune.prefixed.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(size({ showFiles: true }))
    .pipe(nano())
    .pipe(rename('fortune.prefixed.min.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(size({ showFiles: true }))
);

// Build labs
gulp.task('build: lab', () =>
  gulp
    .src(lab)
    .pipe(postcss(postcssLab))
    .pipe(rename('lab.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(size({ showFiles: true }))
    .pipe(nano())
    .pipe(rename('lab.min.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(size({ showFiles: true }))
);

// Build labs
gulp.task('build: fortuner', () =>
  gulp
    .src(fortuner)
    .pipe(postcss(postcssFortuner))
    .pipe(rename('fortuner.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(size({ showFiles: true }))
    .pipe(nano())
    .pipe(rename('fortuner.min.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(size({ showFiles: true }))
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
