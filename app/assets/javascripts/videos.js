$(function() {

  var video = $("video").get(0);

  $("#bookmarks").on("click", ".bookmark", function(event) {
    event.preventDefault();
    video.currentTime = $(this).data('time')
  });

  console.log(videojs)

  var avideojs = videojs('MY_VIDEO_1');

  var markers = $.map($(".bookmark"), function(bookmark) { 
    return $(bookmark).data('time');
  });

  var titles = $.map($(".bookmark"), function(bookmark) { 
    return $(bookmark).text().trim();
  });  

  avideojs.markers({
  setting: {
    markerStyle: {
      'width':'8px',
      'background-color': 'red'
    },
    markerTip:{
      display: true,
      default_text: "",
      show_colon: false
    },
  },
  marker_breaks: markers,
  marker_text  : titles
});  


  $("#create-bookmark").on('submit', function(event) {
    event.preventDefault();

    var $input = $(this).find('input[name=title]');
    var video_id = $(video).data('id');
    var params = {
      bookmark: {
        start_time: video.currentTime,
        title: $input.val()
      }
    }

    $input.val('')

    $.post('/videos/'+ video_id + '/bookmarks', params, function(data) {

    }, 'script');

  });

})