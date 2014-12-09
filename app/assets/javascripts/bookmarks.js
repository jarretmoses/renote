$(function(){

  if(!Player.detect()) {
    return;
  }

  var player = new Player({
    videoId: 'the_video'
  });

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

  $('#bookmarks').on('click', '.edit-bookmark-button',function(event){
    var the_bookmark = $(this).parents('div .bookmark');
    var the_container = the_bookmark.parents('.news-item');
    var content = the_bookmark.find('a.bookmark').text();
    the_bookmark.empty();

    var $input = $('<input class="edit-news-content">');
    var $button = $('<button id="update" class="btn btn-qubico btn-block">Update</button>');
    $input.val(content);
    the_bookmark.append($input);
    the_bookmark.append($button);
    $button.on('click', function(e){

      var data = {
        bookmark: {
          title: $input.val()
        } 
      };
      $.ajax('/videos/' + the_container.data('video') + '/bookmarks/' + the_container.data('id'), {
        method: 'patch',
        data: data,
        dataType: 'script'
      }).done(function() {
          player.render();
        });
    })
  });


  $('#bookmarks').on('click', '.delete-bookmark-button',function(event){
    var the_bookmark = $(this).parents('div .bookmark');
    var the_container = the_bookmark.parents('.news-item');

      $.ajax('/videos/' + the_container.data('video') + '/bookmarks/' + the_container.data('id'), {
        method: 'delete',
        dataType: 'script'
      }).done(function() {
          player.render();  
        });
  })


  // show/hide links
  $('.edit-bookmark-button, .delete-bookmark-button, .evernote-button').hide();
  $('div.bookmark').hover(function(){
    $(this).children('.edit-bookmark-button, .delete-bookmark-button, .evernote-button').toggle();
  })
})