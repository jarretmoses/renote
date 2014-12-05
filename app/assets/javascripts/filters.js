  
/*============================================
Filter Notes/Bookmarks
==============================================*/
$(function(){

  $('.bookmarks').hide();

  $('#filter-works a').click(function(e){
    e.preventDefault();
    $('#filter-works li').removeClass('active');
    $(this).parent('li').addClass('active');

    //category = .notes or .bookmarks
    var category = $(this).attr('data-filter');

    $('.custom-item').each(function(){
      if($(this).is(category)){
        $(this).show();
        // $(this).removeClass('filtered').addClass('selected');
      }
      else{
        $(this).hide();
        // $(this).removeClass('selected').addClass('filtered');
      }

    });
  });

})
