var gulp = require("gulp"),
    sass = require("gulp-sass"),
    rename = require("gulp-rename"),
    postcss = require("gulp-postcss"),
    pug = require("gulp-pug"),
    cssnano = require("cssnano");

function _sass() {
    return gulp
        .src('./src/sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css/'))
}

function _postcss() {
    return gulp
        .src("./dist/css/*.css")
        .pipe(postcss())
        .pipe(gulp.dest('./dist/css/'));
}

function _minify() {
    return gulp
        .src("./dist/css/*.css")
        .pipe(postcss([
            cssnano()
        ]))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('./dist/css/'));
}

function _pug() {
    return gulp
        .src('./src/pug/*.pug')
        .pipe(
            pug({
                pretty: true,
            })
        )
        .pipe(gulp.dest('./dist/'));
}


exports.build = gulp.series(
    _pug,
    _sass,
    _postcss,
    _minify
);
exports.prod = gulp.series(
    _sass,
    _postcss,
    _minify
);


gulp.task("dev:w", function() {
    gulp.series("dev");
    gulp.watch("assets/template/sass/**/*.sass", gulp.series("dev"));
});

gulp.task("bulid", function() {
    gulp.series("build");
});