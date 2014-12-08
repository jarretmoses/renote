'use strict;'

$(function() {

  if(!Player.detect()) {
    return;
  }

  var player = new Player({
    videoId: 'the_video'
  });

  player.render();


  // ToolTip
  if($("#video_title").length > 0) {
    var myOpentip = new Opentip('#video_title', "You just created a new video...yay! Would you like to enter a title for it?", {target:$('#video_title'), tipJoint: "bottom", fixed: "true",  showOn:'creation', hideOn: 'focus', style:'dark' });
    myOpentip.prepareToShow();
  }
})