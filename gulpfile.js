const gulp = require('gulp')

gulp.task('homepage', function() {
    return gulp.src('packages/homepage/public/**/*').pipe(gulp.dest('www'));
});