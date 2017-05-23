
// Définition des dépendances dont on a besoin pour executer les taches
/*eslint-disable */
var
gulp = require( 'gulp' ),
newer = require( 'gulp-newer' ),
size = require ( 'gulp-size' ),
svgmin = require('gulp-svgmin'),
del = require ( 'del' ),
cleanDest = require('gulp-clean-dest'),
sass = require ( 'gulp-sass' ),
gESLint = require( 'gulp-eslint' ),
gBabel = require( 'gulp-babel' ),
browserify = require( "browserify"),
babelify = require( "babelify" ),
Mongo = require( "mongodb" ),
htmlPreprocess = require ( 'gulp-preprocess' ),
htmlclean = require ( 'gulp-htmlclean' ),
browserSync = require ( 'browser-sync' ),
sourceStream = require( "vinyl-source-stream" ),
buffer = require( "vinyl-buffer" ),
gRename = require( "gulp-rename" ),
gUglify = require( "gulp-uglify" ),
fs = require( "fs" ),
mongoose = require("mongoose"),
passePortLocal = require( "passport-local-mongoose" ),
LocalStrategy = require('passport-local').Strategy,
moment = require('moment'),
duration = require('moment-duration-format'),
crypto = require( 'crypto' ),
fileUrl = require('file-url'),
jwt = require( 'jsonwebtoken' ),
pkg = require ('./package.json'),
pug = require ( 'gulp-pug' ),
ObjectID = Mongo.ObjectID,
MongoClient = Mongo.MongoClient;


// Définition de quelques variables générales
var
devBuild = ( (process.env.NODE_ENV || 'development').trim().toLowerCase() !== 'production'),
sourcePug = 'views/',
source ="source/",
dest = 'build/';

// Définition de quelques variables liées à nos taches ( options de taches)
var
svgOpts = {
      in: source + 'images/svg/*',
      out: dest + 'images/svg/',
      watch: source + 'images/svg/*.*'
  },
css = {
  in: source + 'scss/main.scss',
  watch: [source + 'scss/**/*'],
  out: 'build/css/',
  sassOpts: {
    outputStyle: 'expended',
    precision: 3,
    errLogToConsole:true
  }
},
html = {
  in: sourcePug + '*.pug',
  watch: [sourcePug + '*.pug', sourcePug + 'template/**/*'],
  out: dest,
  context: {
    devBuild: devBuild,
    author: pkg.author,
    version: pkg.version
  }
},
syncOpts = {
  server:{
    baseDir: dest,
    index:'index.html'
  },
  open:true,
  notify:true
};


gulp.task('clean', function(){
  del( [dest + '*'] );
});

// Es lint tasks

gulp.task( "lint", function() {
    return gulp
        .src( "build/script/*.js" )
        .pipe( gESLint() )
        .pipe( gESLint.format() );
} );

gulp.task('svgmin', function () {
    return gulp.src(svgOpts.in)
        .pipe(newer(svgOpts.out))
        .pipe(size({title: 'SVG size before compression:', showFiles: true}))
        .pipe(svgmin({
            plugins: [{
                removeTitle: true
            },
            {
                removeDesc: true
            },
            {
                removeViewBox: false
            }]
        }))
        .pipe(size({title: 'SVG size after compression: ', showFiles: true}))
        .pipe(gulp.dest('./build/images/svg/'));
});

// Task for build in the server
gulp.task( "build", function() {
    return gulp
        .src( "src/**/*.js" )
        .pipe( gBabel() )
        .pipe( gulp.dest( "bin" ) )
} );

gulp.task ( "views", function() {
  return gulp
      .src( "src/views/**" )
      .pipe( gulp.dest( "bin/views" ) )
} );

gulp.task( "modules", function(){
    browserify( "static/modules/main.js" )
        .transform( babelify, {
          "presets": [ "es2015" ],
        } )
        .bundle()
        .pipe( sourceStream( "app.js" ) )
        .pipe( gulp.dest( "static/js/" ) )
        .pipe( buffer() )
        .pipe( gRename( "app.min.js" ) )
        .pipe( gUglify().on( "error", console.log ) )
        .pipe( gulp.dest( "static/js" ));
} );

gulp.task('sass', function(){

  return gulp.src(css.in)
  .pipe(sass({
    includePaths: require('bourbon').includePaths
  }))
  .pipe(sass(css.sassOpts))
  .pipe(gulp.dest(css.out))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('html', function(){

  var page =  gulp.src(html.in)
  .pipe(pug({pretty: true}))
  .pipe(htmlPreprocess({context:html.context}));
  if(!devBuild){
    page = page
    .pipe(size({title:'HTML avant nettoyage:'}))
    .pipe(htmlclean())
    .pipe(size({title:'HTML après nettoyage:'}))
  }
  return page.pipe(gulp.dest(html.out));
});


gulp.task('browserSync', function(){
  browserSync(syncOpts);
});


// Tache par défault exécuté lorsqu'on tape gulp dans le terminal
gulp.task('default',['html','sass','svgmin','browserSync','build','views','modules'], function(){

  gulp.watch(html.watch, ['html',browserSync.reload]);
  gulp.watch(svgOpts.watch, ['svgmin']);
  gulp.watch(css.watch, ['sass']);
  gulp.watch( "src/**/*.js", [ "build" ] );
  gulp.watch( "src/views/**", [ "views" ] );
  gulp.watch( "static/modules/**/*.js", [ "modules" ] );

});
