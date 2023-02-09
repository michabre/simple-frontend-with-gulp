# Build a Simple Frontend with Gulp

A simple implementation of Gulp used to convert:

- SCSS files into a single CSS file along with a minified version
  **styles.css** and **styles.min.css**

- JS files into a single JS file along with a minified version
  **scripts.js** and **scripts.min.js**

I created this as a starting point for implementing Gulp into a project. This was originally setup for Gulp 3, so I had to learn how to convert to 4.

This could easily be added into a WordPress, Drupal, MODx or Shopify project.

## Installation

From the command line, in the root of the directory, run:

```bash
npm install
```

## Docker Commands

```bash
# build
docker build -t simple-frontend-with-gulp .

# run site at http://localhost:3001/
docker run -d -p 3001:80 simple-frontend-with-gulp

# enter Bash shell
docker exec -it <container id> bash
```

I've listed to commands to use if you have Gulp 3 or Gulp 4 installed. On the command line, type:

```bash
gulp -version
```

> If the CLI version is < 4, you will have to use the node command to use the Gulp version stored in node_modules. The version of node installed should be >= 8

### Styles

Convert files in the src/scss directory into single CSS files (styles.css, styles.min.css) and move to the css directory.

```bash
gulp styles
```

```bash
node ./node_modules/gulp/bin/gulp.js styles
```

### Scripts

Convert files in the src/js directory into single JS files (scripts.js, scripts.min.js) and move to the js directory.

```bash
gulp scripts
```

```bash
node ./node_modules/gulp/bin/gulp.js scripts
```

### Watch

Watch changes in the src/scss and src/js directory and trigger the **styles** and **scripts** Gulp functions. Once you click save, the files will be compiled.

```bash
gulp watch
```

```bash
node ./node_modules/gulp/bin/gulp.js watch
```

## Bugs and Issues

Please report any issues you find with this code.

## Built With

- [NodeJS](https://nodejs.org/)
- [GulpJS](https://gulpjs.com/)

## Authors

- **Michael C. Breuer** - _Initial work_ - [michabre](https://github.com/michabre)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- [How to Migrate to Gulp.js 4.0](https://www.sitepoint.com/how-to-migrate-to-gulp-4/)
- [GulpJS Documentation](https://gulpjs.com/docs/en/getting-started/quick-start)
- [jeromecoupe/webstoemp-gulpfile.js](https://gist.github.com/jeromecoupe/0b807b0c1050647eb340360902c3203a)