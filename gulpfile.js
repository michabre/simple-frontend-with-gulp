"use strict";

const { src, dest, parallel, watch } = require("gulp");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const cssnano = require("gulp-cssnano");
const minify = require("gulp-minify");
const uglify = require("gulp-uglify");

// directories
const dir = {
  css: ["src/styles/*.css"],
  js: ["src/scripts/dependencies/*.js", "src/scripts/*.js"],
  styles: "css/",
  scripts: "js/",
};

// Stylesheets task
function styles() {
  return src(dir.css)
    .pipe(plumber())
    .pipe(concat("styles.css"))
    .pipe(dest(dir.styles))
    .pipe(cssnano())
    .pipe(rename("styles.min.css"))
    .pipe(dest(dir.styles));
}

// JS task
function scripts() {
  return src(dir.js)
    .pipe(concat("scripts.js"))
    .pipe(dest(dir.scripts))
    .pipe(
      minify({
        ext: {
          min: ".js",
        },
      })
    )
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest(dir.scripts));
}

function watchFiles() {
  watch(dir.css, styles);
  watch(dir.js, scripts);
}

// exports
exports.watch = parallel(watchFiles);
exports.styles = styles;
exports.scripts = scripts;
exports.default = parallel(styles, scripts);
