$(function() {

  var the_video = videojs('the_video');

  var markers = $.map($(".bookmark"), function(bookmark) { 
    return $(bookmark).data('time');
  });

  var titles = $.map($(".bookmark"), function(bookmark) { 
    return $(bookmark).text().trim();
  });  

  the_video.markers({
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

  $("#bookmarks").on("click", ".bookmark", function(event) {
    event.preventDefault();
    the_video.currentTime($(this).data('time'))    
  });



  $("#create-bookmark").on('submit', function(event) {
    event.preventDefault();

    var $input = $(this).find('input[name=title]');
    var video_id = $(the_video.el()).data('id');
    var startTime = the_video.currentTime();
    var title = $input.val();
    var params = {
      bookmark: {
        start_time: startTime,
        title: title
      }
    }


    $.post('/videos/'+ video_id + '/bookmarks', params, function(data) {
        markers.push(parseInt(startTime));
        titles.push(title);

        the_video.markers({
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
          force: true          
        },
        marker_breaks: markers, 
        marker_text  : titles,
      });      
      
      $input.val('')

    }, 'script');

  });

})