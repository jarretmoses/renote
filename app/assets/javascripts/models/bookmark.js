//model
var Bookmark = Bookmark || {};

Bookmark.Model = Backbone.Model.extend({
  url: function(){
    return '/videos/' + $('video').data('id') + '/bookmarks/' + this.get('id') + '.json'
  }
});

