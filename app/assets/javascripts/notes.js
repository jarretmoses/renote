$(function(){
  $('#notes').on('click', '.edit-note-button',function(event){
    var the_note = $(this).parents('div .note');
    var the_container = the_note.parents('.news-item');
    var content = the_note.find('pre').text();
    the_note.empty();

    var $textarea = $('<textarea class="edit-news-content">');
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
})