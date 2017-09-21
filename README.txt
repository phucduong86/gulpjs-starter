SETUP:

Copy folder, change name to project name
Launch Node command
CD to the prj folder
Run
npm install // only need to run once
npm run build // to start watch/browser load process

Currently setup to watch all file changes in the folder and reload on IE browser each time file is saved.

To change the file being serve on the server edit this portion in the gulpfile.js:


gulp.task('browser-sync', function() {
    browserSync.init({
        files: ["./*.htm"],
        server: {
            baseDir: "./",
            index:"clinics_en_phuc.htm"
        }
    });
});

Change index value to the file you want to serve, if this line is removed it will automatically load index.html
