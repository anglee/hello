var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('default', function(){
    // place code for your default task here
    console.log("Hello, gulp!");
});

gulp.task('hello', function () {
    console.log("Hello");
});

gulp.task('script', function () {
    gulp.src('./src/*.js')
        .pipe(concat('hello.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('hello.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});