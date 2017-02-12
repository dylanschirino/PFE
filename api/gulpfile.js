/* Dylan/Kash
 *
 * /gulpfile - gulp tasks
 *
 * coded by Dylan Schirino
 * started at 21/10/2016
 */

/* eslint-disable */

"use strict";

var gulp = require( "gulp" ),
    gESLint = require( "gulp-eslint" ),
    gBabel = require( "gulp-babel" ),
    gUtil = require( "gulp-util" ),
    PouchDB = require( "pouchdb" ),
    browserify = require( "browserify"),
    sourceStream = require( "vinyl-source-stream" ),
    buffer = require( "vinyl-buffer" ),
    gRename = require( "gulp-rename" ),
    gUglify = require( "gulp-uglify" ),
    babelify = require( "babelify" ),
    ObjectID = PouchDB.ObjectID,
    PouchClient = PouchDB.MongoClient;


// ES LINT
gulp.task( "lint", function() {
    return gulp
        .src( "src/**/*.js" )
        .pipe( gESLint() )
        .pipe( gESLint.format() );
} );

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

// Pour faire le reset de la db
gulp.task( "reset-db", function( fNext ){

  // 1. Verify that we are INSIDE the vagrant donc si le nom d'utilisateur est différent de vagrant c'est qu'on est hors de la vagrant.

  if ( process.env.USER !== "vagrant" ) {
    gUtil.beep();
    gUtil.log ( gUtil.colors.red( "This task must be runned from INSIDE the vagrant box") );
    return fNext();
  }
  // Connect to mongodb
  PouchClient.connect("pouchdb://127.0.0.1:27017/api", function( oError, oDB ){

    var fDataParser;

    if( oError ){
      gUtil.beep();
      return fNext( oError );
    }

    fDataParser = function( oElt ){
      // Comme il n'y a pas d'id existant on en crée un soit même !
      oElt._id = new ObjectID();
      if ( oElt.spend && oElt.spend._id ) {
        oElt.spend = new ObjectID( oElt.spend._id );
      }

      oElt.created_at = new Date( oElt.created_at );
      oElt.updated_at = new Date( oElt.updated_at );
      if ( oElt.deleted_at ) {
        oElt.deleted_at = new Date( oElt.deleted_at );
      }
      return oElt;
    };
  } );

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

gulp.task( "watch", function() {
    gulp.watch( "src/**/*.js", [ "build" ] );
    gulp.watch( "src/views/**", [ "views" ] );
    gulp.watch( "static/modules/**/*.js", [ "modules" ] );
} );

gulp.task( "default", [ "build","views","watch"] );// don't forget to add "modules"

gulp.task( "work", [ "default", "watch" ] );
