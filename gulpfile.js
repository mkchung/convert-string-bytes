var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
var uglify = require('gulp-uglify');
var tsProject = ts.createProject('tsconfig.json', {removeComments: false});

gulp.task('default', function () {
  var tsResult = tsProject.src().pipe(tsProject());
  var dts = tsResult.dts.pipe(gulp.dest('dist'));
  var js = tsResult.js.pipe(uglify()).pipe(gulp.dest('dist'));
  return merge([dts, js]);
});
