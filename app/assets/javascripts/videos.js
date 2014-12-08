'use strict;'

$(function() {

  if(!Player.detect()) {
    return;
  }

  var player = new Player({
    videoId: 'the_video'
  });

  player.render();

  $("#bookmarks").on("click", ".bookmark", function(event) {
    event.preventDefault();
    player.seek($(this).data('time'))
  });


  $("#create-bookmark").on('submit', function(event) {
    event.preventDefault();
    var $input = $(this).find('input[name=title]');
    var video_id = player.getVideoId();
    var startTime = player.currentTime();
    var title = $input.val();
    var params = {
      bookmark: {
        start_time: startTime,
        title: title
      }
    }

    $.post('/videos/'+ video_id + '/bookmarks', params, function(data) {
      player.render();
      $input.val('')
    }, 'script');
  });

  $("#create-comment").on('submit', function(event) {
    event.preventDefault();

    var $input = $(this).find('input[name=comment-text]');
    var video_id = player.getVideoId();
    var startTime = player.currentTime();
    var text = $input.val();
    var params = {
      comment: {
        start_time: startTime,
        text: text
      }
    }

    $.post('/videos/'+ video_id + '/comments', params, function(data) {
        $input.val('')
      }, 'script');
  });


  $(".create-note").on('submit', function(event) {
    event.preventDefault();

    var $input = $(this).find('textarea[name=note-text]');
    var video_id = player.getVideoId();
    var text = $input.val();
    var params = {
      note: {
        content: text
      }
    }
    $.post('/videos/'+ video_id + '/notes', params, function(data) {
        $input.val('')
      }, 'script');
  });


  // ToolTip
  if($("#video_title").length > 0) {
    var myOpentip = new Opentip('#video_title', "You just created a new video...yay! Would you like to enter a title for it?", {target:$('#video_title'), tipJoint: "bottom", fixed: "true",  showOn:'creation', hideOn: 'focus', style:'dark' });
    myOpentip.prepareToShow();
  }
})