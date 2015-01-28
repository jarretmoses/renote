var Bookmark = Bookmark || {}

Bookmark.User = Backbone.Model.extend({
  initialize: function(){
    this.fetch();
  },
  url: '/users.json'
});