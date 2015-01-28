//users collection
var Bookmark = Bookmark || {};
$(function(){
  Bookmark.Users = Backbone.Collection.extend({
    iniitialize: function(){
      this.fetch();
    },
    url: '/users.json'
  });
})