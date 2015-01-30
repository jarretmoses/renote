//view
var Bookmark = Bookmark || {}
$(function(){

Bookmark.CollectionView = Backbone.View.extend({
    //container to hold bookmarks
    initialize: function(){
      this.collection = new Bookmark.Collection();
      this.collection.fetch();
      // this.listenTo(this.collection,'reset',this.render);
      // this.listenTo(this.collection,'change',this.render);
      this.listenTo(this.collection, 'add', this.addOne);
      this.listenTo(this.collection, 'remove', this.removeOne);
    },
    el: '#bookmarks',

    events: {
      'click #create-bookmark': 'createBookmark'
    },  
    render: function(){
      this.addAll();
    },

    addOne: function(bookmark){
       var bookmarkView = new Bookmark.View({ model: bookmark });
       if(bookmark.user_name === undefined) bookmark.user();
       this.$el.append(bookmarkView.render().$el);
       player.render();
    },

    addAll: function(){
      var self = this;
      this.collection.fetch().done(function(){
         self.collection.forEach(self.addOne,self);
      }) ;   
    },
    createBookmark: function(){
      var $input = $(this).find('input[name=title]');
      var video_id = player.getVideoId();
      var startTime = player.currentTime();
      var title = $input.val();

      this.collection.add({title: title, start_time: startTime})
    }
  });
})

