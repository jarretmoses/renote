//collection
var Bookmark = Bookmark || {};
$(function(){
  Bookmark.Collection = Backbone.Collection.extend({
    model: Bookmark.Model,
    url: '/videos/' + $('video').data('id') + '/bookmarks.json' 
  });
})
