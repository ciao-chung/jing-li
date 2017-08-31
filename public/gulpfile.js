// gulp [task name], example: gulp sass
var gulp = require('gulp');
var gulpCompass = require('gulp-compass');

// compiler sass
gulp.task('sass',function(){
  return gulp.src('sass/*.sass') // sass 來源路徑
    .pipe(gulpCompass({
      css: 'dist',           // compass 輸出位置
      sass: 'sass',      // sass 來源路徑
      image: 'sass',   // 圖片來源路徑
      style: 'compressed',                // CSS 處理方式，預設 nested（expanded, nested, compact, compressed）
    }))
    .pipe(gulp.dest('dist/css'));
});
