// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){
  $('#notes').on('click', '.edit-note',function(event){
    var parent = $(this).parents('li');
    var content = parent.find('pre').text();
    parent.empty();

    var $textarea = $('<textarea>');
    var $button = $('<button id="update">Update</button>')
    $textarea.val(content);
    parent.append($textarea);
    parent.append($button);
    $button.on('click', function(e){
      data = {note: {content: $textarea.val()} };
      $.ajax('/videos/' + parent.data('video') + '/notes/' + parent.data('id'), {
        method: 'patch',
        data: data,
        dataType: 'script'
      });
    })
  });
})