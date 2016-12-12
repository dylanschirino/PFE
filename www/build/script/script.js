$(function() {
  $("#swipe").swipe( {
    //Generic swipe handler for all directions
    swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
      var currentUrl = $(location).attr('href')

    if( currentUrl == 'http://localhost:3000/' ){
      $(location).attr('href','intro2.html');
    }
    else if( currentUrl == 'http://localhost:3000/intro2.html' ){
      $(location).attr('href','intro3.html');
    }
    else if( currentUrl == 'http://localhost:3000/intro3.html'){
      $(location).attr('href','intro4.html');
    }
  },

  swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
    var currentUrl = $(location).attr('href')

  if( currentUrl == 'http://localhost:3000/intro2.html' ){
    $(location).attr('href','/');
  }
  else if( currentUrl == 'http://localhost:3000/intro3.html'){
    $(location).attr('href','intro2.html');
  }
}
  });

  //Set some options later
  $("#swipe").swipe( {fingers:1} );
});
