var Bookmark = Bookmark || {};

$(function(){
  if(!Player.detect()) {
    return;
  }

  var player = new Player({
    videoId: 'the_video'
  });

  Bookmark.View = Backbone.View.extend({ 
    initialize: function(){
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
      this.user = this.model.user();
      this.render();
    },
    template: Handlebars.compile( $('#bookmark-template').html() ),
    render: function(){  
      this.$el.html(this.template(this.model.attributes));  
      return this;
    },

    events: {
      'click .edit-bookmark-button': 'edit',
      'click button': 'update',
      'click .delete-bookmark-button': 'destroy'
    },

    edit: function(e){
      var $bookmark = this.$('div.bookmark');
      var content = this.$('a.bookmark').text();

      $bookmark.empty();
      var $input = $('<input class="edit-news-content">');
      var $button = $('<button id="update" class="btn btn-qubico btn-block">Update</button>');
      $input.val(content);
      $bookmark.append($input);
      $bookmark.append($button);
    },

    update: function(e){
      e.preventDefault();
      var content = this.$('input').val();
      this.model.set({title: content});
      this.model.save();
      player.render();
    },

    destroy: function(e){
      this.model.destroy();
    }
  });
})

