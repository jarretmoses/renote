$(function(){
  $('#bookmarks').on('click', '.edit-bookmark-button',function(event){
    var the_bookmark = $(this).parents('div .bookmark');
    var the_container = the_bookmark.parents('.news-item');
    var content = the_bookmark.find('a').text();
    the_bookmark.empty();

    var $textarea = $('<textarea class="edit-news-content">');
    var $button = $('<button id="update" class="btn btn-qubico btn-block">Update</button>')
    $textarea.val(content);
    the_bookmark.append($textarea);
    the_bookmark.append($button);
    $button.on('click', function(e){
      data = {bookmark: {content: $textarea.val()} };
      $.ajax('/videos/' + the_container.data('video') + '/bookmarks/' + the_container.data('id'), {
        method: 'patch',
        data: data,
        dataType: 'script'
      });
    })
  });
})