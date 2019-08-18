"use strict";

const { src, dest, parallel, watch } = require('gulp');
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const sass = require("gulp-sass");
sass.compiler = require('node-sass');
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const concat = require('gulp-concat');

// directories
const dir = { 
  "scss": "scss/*.scss",
  "css": "css/"
};

// CSS task
function css() {
  return src([dir.scss])
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(concat('styles.css'))
    .on("error", sass.logError)
    .pipe(dest(dir.css))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest(dir.css));
}

// watch for changes in sass files
function sassTocss() {
  watch(dir.scss, css);
}

// exports
exports.css = css;
exports.default = parallel(css);
exports.watch = sassTocss;