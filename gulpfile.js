var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('sass', function(){
  return gulp.src('css/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('.'))
    .pipe(browserSync.reload({
      stream: true
    }))
});



gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('css/**/*.scss', ['sass']);
  // Other watchers
});




gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
})
