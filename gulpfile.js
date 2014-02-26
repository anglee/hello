var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function(){
    // place code for your default task here
    console.log("Hello, gulp!");
});

gulp.task('hello', function () {
    console.log("Hello");
});

gulp.task('script', function () {
    gulp.src('./src/*.js')
        .pipe(concat("all.js"))
        .pipe(gulp.dest("./dist/"));
});