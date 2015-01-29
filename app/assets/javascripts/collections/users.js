//users collection
var Bookmark = Bookmark || {};
$(function(){
  Bookmark.Users = Backbone.Collection.extend({
    initialize: function(){
      this.fetch();
    },
    url: '/users.json'
  });
})