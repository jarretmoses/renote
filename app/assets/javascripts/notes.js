$(function(){

  if(!Player.detect()) {
    return;
  }

  var player = new Player({
    videoId: 'the_video'
  });
    

  $('#notes').on('click', '.edit-note-button',function(event){
    var the_note = $(this).parents('div .note');
    var the_container = the_note.parents('.news-item');
    var content = toMarkdown(the_note.find('.note-content').html());
    the_note.empty();

    var $textarea = $('<textarea class="edit-news-content" rows="10">');
    var $button = $('<button id="update" class="btn btn-qubico btn-block">Update</button>')
    $textarea.val(content);
    the_note.append($textarea);
    the_note.append($button);
    $button.on('click', function(e){
      data = {
        note: {
          content: $textarea.val()
        } 
      };
      $.ajax('/videos/' + the_container.data('video') + '/notes/' + the_container.data('id'), {
        method: 'patch',
        data: data,
        dataType: 'script'
      });
    })
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

  // show/hide links
  $('.edit-note-button, .delete-note-button, .evernote-button').hide();
  $('div.note').hover(function(){
    $(this).children('.edit-note-button, .delete-note-button, .evernote-button').toggle();
  })
});