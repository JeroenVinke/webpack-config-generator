const gulp = require('gulp');
const preprocess = require('gulp-preprocess');

// at some point we have this configuration model
var model = { name: 'aurelia-app',
  type: 'project:application',
  buildsystem: 'webpack',
  platform: { id: 'web', displayName: 'Web' },
  transpiler:
   { id: 'babel',
     displayName: 'Babel',
     fileExtension: '.js',
     options: { plugins: [Object] } },
  markupProcessor: { id: 'none', displayName: 'None', fileExtension: '.html' },
  cssProcessor: { id: 'postcss', displayName: 'Post CSS', fileExtension: '.css' },
  editor: { id: 'vscode', displayName: 'Visual Studio Code' },
  unitTestRunner: { id: 'karma', displayName: 'Karma' } };

var context = model;

gulp.task('default', ['generate'], function() {
  console.log(require('fs').readFileSync('./webpack.config.js', 'utf8'));
});

gulp.task('generate', function() {
  return gulp.src(['./template/webpack.config.js'])
    .pipe(preprocess({ context: context }))
    .pipe(gulp.dest('./'));
});