//users collection
var Bookmark = Bookmark || {};
Bookmark.Users = Backbone.Collection.extend({
    initialize: function(){
      this.fetch();
    },
    url: '/users.json'
});
