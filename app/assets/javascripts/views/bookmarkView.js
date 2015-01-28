var Bookmark = Bookmark || {};

$(function(){
  Bookmark.View = Backbone.View.extend({ 
    initialize: function(){
      this.model.on('change', this.render,this);
      this.model.on('destroy', this.remove, this);
      this.render();
    },
    template: Handlebars.compile( $('#bookmark-template').html() ),
    render: function(){  
      this.$el.html(this.template( this.model.attributes ));  
      return this;
    },
    events: {
      'click #update': 'update'
    }
  });
})

