//view
$(function(){
  BookmarkView = Backbone.View.extend({
    //container to hold bookmarks
    el: '#bookmarks',
    model: Bookmark,
    initialize: function(){
      this.model.on('change', this.render,this);
    },
    events: {
      'click #update': 'update'
    },


    update: function(){
      alert('update clicked');
    }


  });
})

