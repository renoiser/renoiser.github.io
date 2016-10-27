var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');

var jsFiles = [
  "lib/three_old.js"
  // "lib/threejs/examples/js/renderers/CanvasRenderer.js",
  // "lib/threejs/examples/js/renderers/Projector.js"
]

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
    .pipe(concat('library-bundle.min.js'))
    .pipe(gulp.dest('js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});
//
gulp.task('sass', function() {
    gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({processImport: false}))
        .pipe(gulp.dest('css'));
});


gulp.task('default',['sass','scripts'],function(){
  console.log('done!');
});
