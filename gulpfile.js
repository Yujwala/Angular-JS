'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var templateCache = require('gulp-angular-templatecache');
var replace = require('gulp-string-replace');
var concatSource = require('gulp-concat-sourcemap');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var sassFiles = './stylesheets/*.scss';
var cssDest = './stylesheets';

var fs = require('fs');
var json = JSON.parse(fs.readFileSync('./package.json'));
var jsSourceFiles = ['app.js','constants.js','services/**/*.js','directives/**/*.js','controllers/**/*.js','utils/**/*.js'];

gulp.task('styles', function(){
    gulp.src('./stylesheets/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

gulp.task('sass-watch',function() {
    gulp.watch(sassFiles,['styles']);   // Watch all the .scss files, then run the styles task
});

gulp.task('createMainPage', function(){
  gulp.src('sampleIndex.html')
  .pipe(replace(new RegExp('{{path}}', 'g'), 'AssetTool'))
  .pipe(replace(new RegExp('@env@', 'g'), json.version))
  .pipe(rename('main.html'))
  .pipe(gulp.dest('./'));
})

gulp.task('templateCache', function () {
  return gulp.src('./templates/**/*.html')
    .pipe(templateCache('templates.js', {root: 'templates/', module: 'AssetTool'}))
    .pipe(gulp.dest(''));
});

gulp.task('html-watch', function () {
  gulp.watch('./templates/**/*.html', ['templateCache']);
});

gulp.task('index:watch', function(){
  gulp.watch('index.html', ['createMainPage']);
});

gulp.task('jsConcat', function() {
    gulp.src(jsSourceFiles)
        //.pipe(uglify())
        .pipe(concatSource('bundle.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('jsConcatProd', function() {
    gulp.src(jsSourceFiles)
        .pipe(concat('bundle_prod.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('js:watch', function () {
  gulp.watch(jsSourceFiles, ['jsConcat', 'jsConcatProd']);
});

// gulp.task('jsminify', function() {
//     gulp.src([
//       'app.js',
//       'controllers/*.js',
//       'js/services/*.js'
//     ])
//     .pipe(concat('all.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('minifiedVersion'));
// });

gulp.task('default',  gulp.series(['build','createMainPage', 'styles', 'sass-watch', 'templateCache', 'html-watch', 'jsConcatProd','jsConcat','js:watch', 'index:watch'])); // Default will run the 'entry' watch task
