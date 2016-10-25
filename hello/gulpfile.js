var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');

// var jsFiles = [
//   "app/lib/pxloader-all.min.js",
//   "public/static/lib/three.min.js",
//   "public/static/lib/wagner/Wagner.js",
//   "public/static/lib/wagner/Wagner.base.js"
// ]
//
// gulp.task('scripts', function() {
//     return gulp.src(jsFiles)
//     .pipe(concat('library-bundle.min.js'))
//     .pipe(gulp.dest('public/static/lib'))
//     .pipe(uglify())
//     .pipe(gulp.dest('public/static/lib'));
// });
//
gulp.task('sass', function() {
    gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({processImport: false}))
        .pipe(gulp.dest('css'));
});


gulp.task('default',['sass'],function(){
  console.log('done!');
});
