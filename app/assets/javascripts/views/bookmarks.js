//view
$(function(){
  BookmarkView = Backbone.View.extend({
    //container to hold bookmarks
    el: '#bookmarks',
    model: Bookmark,
    initialize: function(){
      this.model.on('change', this.render,this);
      this.model.on('destroy', this.remove, this);
    },
    template: _.template(),
    events: {
      'click #update': 'update'
    },
    render: function(){
      this.el$.append(this.template(this.model.attributes));  
    }

  });
})

