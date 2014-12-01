
$(function() {

  var video = $("video").get(0);

  $("#bookmarks").on("click", ".bookmark", function(event) {
    event.preventDefault();
    // event.preventDefault();
    console.log(this)
    video.currentTime = $(this).data('time')
  });


  $("#create-bookmark").on('click', function(event) {
    event.preventDefault();

    var params = {
      bookmark: {
        start_time: video.currentTime
      }
    }

    $.post('/bookmarks', params, function(data) {
      console.log(data)
      // eval(data);
    }, 'script');

  });

})