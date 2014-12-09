'use strict;'

$(function() {

  if(!Player.detect()) {
    return;
  }

  var player = new Player({
    videoId: 'the_video'
  });

  player.render();

  $('#title').on('click', function(){
    title = $('#title').text().trim();
    // append (use form_for, make dynamic)
      // <form accept-charset="UTF-8" action="/videos/3" class="edit_video" data-remote="true" id="edit_video_3" method="post" _lpchecked="1"><div style="display:none"><input name="utf8" type="hidden" value="✓"><input name="_method" type="hidden" value="patch"></div>
      // <div class="form-group" id="no-title">
      // <input class="form-control input-lg" id="video_title" name="video[title]" type="text">
      // </div>
      // </form>
    // to
      // <div id="title" class="col-md-8">
  })
  

  // ToolTip
  if($("#video_title").length > 0) {
    var myOpentip = new Opentip('#video_title', "You just created a new video...yay! Would you like to enter a title for it?", {target:$('#video_title'), tipJoint: "bottom", fixed: "true",  showOn:'creation', hideOn: 'focus', style:'dark' });
    myOpentip.prepareToShow();
  }
})