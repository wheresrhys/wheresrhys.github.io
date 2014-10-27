
var chalk = require('chalk');
var Metalsmith = require('metalsmith');
var swig = require('swig');
var gulp = require('gulp');

gulp.task('pages', function () {
  
  var metalsmith = require('gulpsmith')();
  metalsmith.metadata({
    title: 'wheresrhys',
    description: 'Home of London based web developer Rhys Evans'
  });
  metalsmith
    .use(require('metalsmith-markdown')())
    .use(require('metalsmith-drafts')())
    .use(require('metalsmith-permalinks')({
      pattern: ':date/:title',
      date: 'YYYY'
    }))
    .use(require('metalsmith-templates')('swig'))

  return gulp.src('./src/content/*.md')
    .pipe(require('gulp-front-matter')()).on('data', function(file) {
        Object.keys(file.frontMatter).forEach(function (key) {
          file[key] = file.frontMatter[key]; 
        });
        delete file.frontMatter;
    })
    .pipe(metalsmith)
    .pipe(gulp.dest('./build'));

});

gulp.task('index', ['pages'], function () {

    return gulp.src('./src/content/index.html')
      .pipe(require('gulp-swig')())
      .pipe(gulp.dest('./build/'))
});

gulp.task('js', ['pages'], function () {
  return gulp.src('./src/js/main.js')
    .pipe(require('gulp-browserify')({debug:false}))
    .pipe(require('gulp-uglify')())
    .pipe(gulp.dest('./build'));
});

gulp.task('sass', ['pages'], function () {
  return gulp.src('./src/scss/main.scss')
    .pipe(require('gulp-sass')({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./build'));
});

gulp.task('img', ['pages'], function () {
  gulp.src('./img/**/*')
    .pipe(gulp.dest('./build/img'));
  gulp.src('./favicon.ico')
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['pages', 'index', 'js', 'sass', 'img']);


  // https://github.com/expalmer/metalsmith-gist
  // https://github.com/hurrymaplelad/metalsmith-feed
  // https://github.com/wilsaj/metalsmith-each
  // https://github.com/segmentio/metalsmith-collections
  // https://github.com/blakeembrey/metalsmith-collections-paginate
  // https://www.npmjs.org/package/metalsmith-code-highlight
  // https://github.com/segmentio/metalsmith-ignore
  // https://github.com/weswigham/metalsmith-metallic
  // https://github.com/unstoppablecarl/metalsmith-navigation
  // https://github.com/RobinThrift/metalsmith-paginate



/**
 * Log an error and then exit the process.
 *
 * @param {String} message
 */

function fatal(msg){
  console.error();
  console.error(chalk.red('  Metalsmith') + chalk.gray(' · ') + msg);
  console.error();
  process.exit(1);
}

/**
 * Log a `message`.
 *
 * @param {String} message
 */

function log(message){
  console.log();
  console.log(chalk.gray('  Metalsmith · ') + message);
  console.log();
}