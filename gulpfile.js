var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var concat		= require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var babel = require('gulp-babel');
var ngAnnotate = require('gulp-ng-annotate');

// Static server
gulp.task('default', ['scripts-vendor','scripts','html'], function() {
	gulp.watch('./index.html').on('change', browserSync.reload);
    gulp.watch('js/**/*.js', ['scripts']);
    gulp.watch('templates/**/*.html', ['html']);

    browserSync.init({
	     server: "./"
	});
});

gulp.task('dist', ['scripts-vendor','scripts-dist','html-dist'], function() {
});

gulp.task('scripts-vendor', function() {

    gulp.src([
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/angular/angular.min.js',
        'bower_components/angular-route/angular-route.min.js',
    ])
        .pipe(concat('vendor.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('scripts', function() {
    gulp.src('js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('scripts-dist', function() {
    gulp.src('js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('html', function() {
    gulp.src('templates/**/*.html')
        .pipe(gulp.dest('dist/templates/'));
});

gulp.task('html-dist', function() {
    var options = { collapseWhitespace: true, removeComments: true, caseSensitive: true };
    gulp.src('templates/**/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/templates/'));
});