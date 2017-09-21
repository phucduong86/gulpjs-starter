var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        files: ["./*.htm"],
        server: {
            baseDir: "./",
            
        },
	browser: ["Chrome", "Explorer"]
    });
});

gulp.task('watch', ['browser-sync'], function(){
  gulp.watch('*.*').on('change', browserSync.reload);
})