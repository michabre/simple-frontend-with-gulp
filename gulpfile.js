"use strict";

const { src, dest, parallel, watch } = require("gulp");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const sass = require("gulp-sass");
sass.compiler = require("node-sass");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const minify = require("gulp-minify");
const uglify = require("gulp-uglify");

// directories
const dir = {
  scss: ["src/scss/*.scss"],
  js: ["src/js/dependencies/*.js", "src/js/*.js"],
  styles: "css/",
  scripts: "js/",
};

// Stylesheets task
function styles() {
  return src(dir.scss)
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(concat("styles.css"))
    .on("error", sass.logError)
    .pipe(dest(dir.styles))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
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

// exports
exports.styles = styles;
exports.scripts = scripts;
exports.default = parallel(styles, scripts);
