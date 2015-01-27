//model
$(function(){
  Bookmark = Backbone.Model.extend({
    initialize: function(){
      this.view = new BookmarkView({ model: this }).render();
    }
  });
})
