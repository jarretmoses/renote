$(function() {

  var demoVideo = "http://flatiron-videos.s3.amazonaws.com/ruby-006/remote-true.mp4"

  $("#try-me-out").click(function(event) {
      event.preventDefault();
      $("form input[type=text]").typed({
        strings: [demoVideo],
        typeSpeed: 0,
        startDelay: 0,
        contentType: 'text'
      });
  });

});