//collection
$(function(){
  Bookmarks = Backbone.Collection.extend({
    model: Bookmark,
    url: '/videos/18.json'
  });
});
