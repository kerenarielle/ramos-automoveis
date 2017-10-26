var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('styles/**/*.scss')
    .pipe(sass({
        style: 'compressed'
    }))
    .pipe(gulp.dest('css/'));
});

gulp.task('default', function(){

});