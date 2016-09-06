var gulp = require("gulp");
var browserSync = require("browser-sync");

gulp.task("reload", browserSync.reload);

gulp.task("file-watch", function (){
    
    browserSync({
        server: {
            baseDir: "./"
        }
    });
    
    gulp.watch(["./*.html", "./css/*.css"], ["reload"]);
    
});

