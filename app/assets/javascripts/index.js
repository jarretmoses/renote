$(function() {

  var demoVideo = "https://www.youtube.com/watch?v=WVozno4AM34"
  var hasRunBefore = false;

  $("#try-me-out").click(function(event) {
      event.preventDefault();
      $("form input[type=text]").typed({
        strings: [demoVideo],
        typeSpeed: 0,
        startDelay: 0,
        contentType: 'text',
        callback: function() {
          $('#take-notes-btn').click();
        }
      });
  });

});
