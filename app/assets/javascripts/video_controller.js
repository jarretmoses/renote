// Video Object 
function videoController(){
  this.$player = videojs('the_video');
  this.id      = $(this.$player.el()).data('id')
};
// Get Marker Times
videoController.prototype.getMarkers = function(){
  return $.map($("a.bookmark"), function(bookmark) {
    return $(bookmark).data('time');
  });
}
// Get Bookmark Titles 
videoController.prototype.getTitles = function(){
  return $.map($("a.bookmark"), function(bookmark) { 
    return $(bookmark).text().trim();
  }); 
}
// Set Markers and their tittes on video 
videoController.prototype.setMarkers = function(){
  var markers = this.getMarkers();
  var titles = this.getTitles();
  this.$player.markers({
    setting: {
      markerStyle: {
        'width':'8px',
        'background-color': 'red'
      },
      markerTip:{
        display: true,
        default_text: "",
        show_colon: false
      },
      forceInitialization: true 
    },
    marker_breaks: markers, 
    marker_text  : titles
  });
}

videoController.prototype.createBookmark = function(input){
  var self = this;
  var startTime = self.$player.currentTime();
  var title = input.val();
  var params = {
    bookmark: {
      start_time: startTime,
      title: title
    }
  }
  
  $.post('/videos/'+ self.id + '/bookmarks', params, function(data) {
      self.setMarkers();
      self.getTitles();  
      input.val('');
  }, 'script');
}

videoController.prototype.createNote = function(input){
  var self = this;
  var text = input.val();
  var params = {
    note: {
      content: text
    }
  }
  $.post('/videos/'+ self.id + '/notes', params, function(data) {
    input.val('');
  }, 'script');
}

videoController.prototype.editBookmark = function(input,container){
  var self = this;
  var data = {
    bookmark: {
      title: input.val()
    } 
  };
  $.ajax('/videos/' + container.data('video') + '/bookmarks/' + container.data('id'), {
    method: 'patch',
    data: data,
    dataType: 'script'
  }).done(function(){self.setMarkers()});
}

videoController.prototype.deleteBookmark = function(container){
  var self = this
  $.ajax('/videos/' + container.data('video') + '/bookmarks/' + container.data('id'), {
      method: 'delete',
      dataType: 'script'
  }).done(function() { self.setMarkers() });
}

