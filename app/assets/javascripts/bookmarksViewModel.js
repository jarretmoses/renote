function Bookmark(title,time){
  var self = this;
  self.title = title;
  self.time = time;
}

function bookmarksViewModel(){
  var self = this;
  self.bookmarks = ko.observableArray([]);

  self.addBookmark = function(formElement){
    var player = new Player({videoId: 'the_video'});
    var time = player.currentTime();

    bookmark = new Bookmark(title, time)
    self.bookmarks.push(bookmark)
  };
  self.removeBookmark = function(bookmark){
    debugger
    self.bookmarks.remove(bookmark);
  };
  self.scan = function(bookmark){
    var player = new Player({videoId: 'the_video'});
    player.seek(bookmark.time)
  };

}

// ko.applyBindings(new bookmarksViewModel());
// added to `_form.html.erb`
