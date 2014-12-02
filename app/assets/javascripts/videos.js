
$(function() {

  var video = $("video").get(0);

  $("#bookmarks").on("click", ".bookmark", function(event) {
    event.preventDefault();
    // event.preventDefault();
    console.log(this)
    video.currentTime = $(this).data('time')
  });


  $("#create-bookmark").on('submit', function(event) {
    event.preventDefault();

    var $input = $(this).find('input[name=title]');

    var params = {
      bookmark: {
        start_time: video.currentTime,
        title: $input.val()
      }
    }

    $input.val('')

    $.post('/bookmarks', params, function(data) {

    }, 'script');

  });

})