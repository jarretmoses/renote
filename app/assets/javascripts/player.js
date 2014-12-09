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
    return $('video, iframe').length > 0; 
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
      
      this.sortBookmarks();
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

  _Player.prototype.sortBookmarks = function(){
  var $container = $('.container.bookmarks');
  var bookmarks = $('.news-item.bookmarks');

  var sorted = _.sortBy(bookmarks, function(bookmark){
    return $(bookmark).find('span').data('time');
  });
  _.each(sorted,function(item){
    $($container).append(item);
  });
  }

  return _Player;

})(jQuery, videojs);