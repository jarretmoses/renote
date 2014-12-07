var Player = (function($) {

  function _Player(spec) {
    this.video = videojs(spec.videoId);
    this.style = spec.style || { 'width':'8px', 'background-color': 'red'}
  }

  function getBreaks() {
    return $.map($("a.bookmark"), function(bookmark) {
      return $(bookmark).data('time');
    });
  }

  function getTitles() {
    return $.map($("a.bookmark"), function(bookmark) { 
      return $(bookmark).text().trim();
    });     
  }

  _Player.detect = function() {
    return $('video').length > 0;
  }

  _Player.prototype.render = function() {
      this.video.markers({
        setting: {
          markerStyle: this.style,
          markerTip:{
            display: true,
            default_text: "",
            show_colon: false
          },
          forceInitialization: true          
        },
        marker_breaks: getBreaks(), 
        marker_text  : getTitles(),
      });
  }

  _Player.prototype.seek = function(time) {
    this.video.currentTime(time);
  }

  _Player.prototype.currentTime = function() {
    return this.video.currentTime();
  }

  _Player.prototype.getVideoId = function() {
    return $(this.video.el()).data('id');
  }

  return _Player;

})(jQuery, videojs);