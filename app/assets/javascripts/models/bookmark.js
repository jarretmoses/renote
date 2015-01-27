//model
$(function(){
  Bookmark = Backbone.Model.extend({
    initialize: function(){
      this.on('change')
    }
  });
})
