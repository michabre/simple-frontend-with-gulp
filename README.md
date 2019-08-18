# Convert SCSS to CSS with Gulp 4

A simple implementation of Gulp 4 used to convert SCSS files into a single CSS file.

I created this as a starting point for implementing Gulp into a project. This was originally setup for Gulp 3, so I had to learn how to convert to 4.

## Installation

From the command line, in the root of the directory, run:

```bash
npm install
```

This will install all project dependencies and create a node_modules folder.

!!! DO NOT COMMIT YOUR node_modules FOLDER !!!

**.gitignore**
```bash
# Dependency directories
node_modules/
```

## Commands

I've listed to commands to use if you have Gulp 3 or Gulp 4 installed. On the command line, type:

```bash
gulp -version
```

> If the CLI version is < 4, you will have to use the node command to use the Gulp version stored in node_modules. The version of node installed should be >= 8

Convert files in scss directory into single css files (styles.css, styles.min.css) and move to the css directory

```bash
gulp
```

```bash
node ./node_modules/gulp/bin/gulp.js
```

Watch changes in the scss directory and trigger 'css' Gulp function

```bash
gulp watch
```

```bash
node ./node_modules/gulp/bin/gulp.js watch
```

## Bugs and Issues

Please report any issues you find with this code.

## Built With

* [NodeJS](https://nodejs.org/)
* [GulpJS](https://gulpjs.com/)

## Authors

* **Michael C. Breuer** - *Initial work* - [michabre](https://github.com/michabre)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [How to Migrate to Gulp.js 4.0](https://www.sitepoint.com/how-to-migrate-to-gulp-4/)
* [GulpJS Documentation](https://gulpjs.com/docs/en/getting-started/quick-start)
