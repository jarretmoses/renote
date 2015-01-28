var Bookmark = Bookmark || {}
// var url = document.URL;
// var vid_id = url.slice(url.lastIndexOf('/')+1);
// $.get('/videos/' + vid_id, function(data){
//   bookmarksData = JSON.parse(data);
// });

// $(function(){
//   user          =  new Bookmark.User();
//   bookmark      =  new Bookmark.Model();
//   bookmarks     =  new Bookmark.Collection();
//   bookmarksView =  new Bookmark.CollectionView({ collection: bookmarks });
//   bookmarksView.render();
// })

$(function(){
  collectionView = new Bookmark.CollectionView();
})
