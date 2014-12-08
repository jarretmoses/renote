  
/*============================================
Filter Notes/Bookmarks
==============================================*/
$(function(){

  $('.notes').hide();

  $('#filter-works a').click(function(e){
    e.preventDefault();
    $('#filter-works li').removeClass('active');
    $(this).parent('li').addClass('active');

    //category = .notes or .bookmarks
    var category = $(this).attr('data-filter');

    $('.custom-item').each(function(){
      if($(this).is(category)){
        $(this).show();
      }
      else{
        $(this).hide();
      }

    });
  });

})
