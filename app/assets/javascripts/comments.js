$(function(){

  if(!Player.detect()) {
    return;
  }

  var player = new Player({
    videoId: 'the_video'
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
});