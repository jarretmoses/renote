'use strict;'

$(function() {

  if(!Player.detect()) {
    return;
  }

  // var player = new Player({
  //   videoId: 'the_video'
  // });


  $('#title').on('click', 'h2', function(){
    var $the_title = $(this);
    var $the_container = $the_title.parents('div#title');
    var content = $the_title.text().trim();
    $the_container.empty();

    var the_video_id = player.getVideoId();

    var $form = $("<form class='edit_video' data-remote='true' id='edit_video_" + the_video_id + "' </form>")
    var $inputContainer = $('<div class="form-group" id="no-title"></div>')
    var $input = $('<input class="form-control input-lg" id="video_title" name="video[title]" type="text" >')

    $input.val(content);
    $inputContainer.append($input);
    $form.append($inputContainer);
    $the_container.append($form);

    $input.focus();

    $input.on('blur', function(){
      $form.submit();
    })
    $form.on('submit', function(e) {
      e.preventDefault();
      var data = {
        video: {
          title: $input.val()
        }
      };

      $.ajax("/videos/" + the_video_id + "'", {
        method: 'patch',
        data: data,
        dataType: 'script'
      });
    })

  })
  

  // ToolTip
  if($("#video_title").length > 0) {
    var myOpentip = new Opentip('#video_title', "You just created a new video...yay! Would you like to enter a title for it?", {target:$('#video_title'), tipJoint: "bottom", fixed: "true",  showOn:'creation', hideOn: 'focus', style:'dark', removeElementsOnHide: true});
    myOpentip.prepareToShow();
  }
})