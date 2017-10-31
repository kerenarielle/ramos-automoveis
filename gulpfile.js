var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
            baseDir: '.'
        }
    });

    gulp.watch('styles/**/*.scss', ['sass']);
    gulp.watch("html/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src('styles/**/*.scss')
    .pipe(sass({
        style: 'compressed'
    }))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());;
});

gulp.task('default',['serve']);
