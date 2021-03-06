const gulp = require('gulp');
const ts = require('gulp-typescript');
const clean = require('gulp-clean');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
  const tsResult = tsProject.src()
  .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['scripts'], () => {
  gulp.watch(['src/**/*.ts','!src/**/*.if.ts'], ['scripts'])
});

gulp.task('assets', function() {
  return gulp.src(JSON_FILES)
  .pipe(gulp.dest('dist'));
});

gulp.task('data', function() {
  return gulp.src('./src/**/*.json')
  .pipe(gulp.dest('./dist'));
});

gulp.task('clean', function() {
  return gulp.src('./dist/**/*.if.js')
  .pipe(clean());
});

gulp.task('default', ['watch', 'assets', 'clean']);
gulp.task('gulp-copy', ['data']);