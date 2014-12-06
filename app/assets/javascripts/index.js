$(function() {

  var demoVideo = "http://flatiron-videos.s3.amazonaws.com/ruby-006/remote-true.mp4"
  var hasRunBefore = false;  

  $("#try-me-out").click(function(event) {
      event.preventDefault();
      if(!hasRunBefore) {
        $("form input[type=text]").typed({
          strings: [demoVideo],
          typeSpeed: 0,
          startDelay: 0,
          contentType: 'text',
          callback: function() {             
            hasRunBefore = true;
          }
        });
      } else {
        $("form input[type=text]").typed('reset').typed('init');        
      }
  });

});