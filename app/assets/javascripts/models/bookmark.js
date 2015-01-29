//model
var Bookmark = Bookmark || {};

Bookmark.Model = Backbone.Model.extend({
  initialize: function(){
    this.formatTime();
  },
  url: function(){
    return '/videos/' + $('video').data('id') + '/bookmarks/' + this.get('id') + '.json'
  },
  user: function(){
    this.set({user_name: user.get('name')});
  },
  formatTime: function(){
    var seconds = this.get('start_time'); // don't forget the second param
    var hours   = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds - (hours * 3600)) / 60);
    var seconds = seconds - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours+':'+minutes+':'+seconds;
    this.set({format_time: time});
  }
});

