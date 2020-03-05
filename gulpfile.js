var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('app/sass/*.scss')
        .pipe(sass.sync())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
})

gulp.task('images', function () {
    return gulp.src('app/img/*.*')
        .pipe(gulp.dest('dist/img'))
})

gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(gulp.dest('dist'))
})

gulp.task('js', function () {
    return gulp.src('app/js/*.*')
        .pipe(gulp.dest('dist/js'))
})

gulp.task('build', gulp.series(
    'sass',
    'images',
    'html',
    'js'
))

gulp.task('serve', gulp.series('build', () => {
    browserSync.init({ server: "dist" });
    gulp.watch("app/js/*.js", gulp.series('js'))
    gulp.watch("app/sass/*.scss", gulp.series('sass'));
    gulp.watch("app/img/*.*", gulp.series('images'));
    gulp.watch("app/*.html", gulp.series('html')).on('change', browserSync.reload);
}));