var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jasmine = require('gulp-jasmine');

gulp.task('hello', function() {
    console.log("HELLO");
});

gulp.task('dev', function() {
    nodemon({script: 'app.js'})
        .on('change', ['test']);
});

gulp.task('test', function() {
    return gulp.src('spec/app-spec.js')
        .pipe(jasmine());
});
