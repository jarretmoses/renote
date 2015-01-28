//view
var Bookmark = Bookmark || {}

Bookmark.CollectionView = Backbone.View.extend({
    //container to hold bookmarks
    initialize: function(){
      this.collection = new Bookmark.Collection()
      this.listenTo(this.collection,'reset',this.render);
      this.listenTo(this.collection,'change',this.render);
      this.render();
    },
    el: '#bookmarks',
    render: function(){
      var self = this;
      this.collection.fetch().done(function(){
         self.collection.each(function(bookmark){
           var bookmarkView = new Bookmark.View({ model: bookmark });
            self.$el.append(bookmarkView.render().el);
        });  
      })    
    }
  });


