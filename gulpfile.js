var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var es = require('event-stream');
var minifyCSS = require('gulp-minify-css');

gulp.task('scripts', function(){
    var javaScript = gulp.src('js/*.js');

    return es.merge(javaScript)
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('minify-css', function (){

    return gulp.src('css/style.css')
        .pipe(minifyCSS({keepSpecialComments: 1}))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist/css'))

});

gulp.task('watch', function(){

    gulp.watch(['scripts'], ['minify-css']);

});
