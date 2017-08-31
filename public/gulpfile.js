// gulp [task name], example: gulp sass

var gulp = require('gulp');
var sass = require('gulp-sass');

// compiler sass
gulp.task('sass',function(){
  return gulp.src('sass/*.sass')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('dist/css'));
});
