var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        files: ["./*.htm"],
        server: {
            baseDir: "./",
            index: "access_survey_en.htm"
        },
	browser: ["Chrome", "Explorer"],
	ghostMode: {
	    clicks: true,
	    forms: true,
	    scroll: true
	}
    });
});

gulp.task('watch', ['browser-sync'], function(){
  gulp.watch('*.*').on('change', browserSync.reload);
})