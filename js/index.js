$(document).ready(function(){
  $('.item').click(function(){
    $(this).addClass('thefocus');
    $(this).children('.close').css('display', 'block');
    $('body').after('<div class="blackestnight"></div>');
    $(this).children('img').hide();
    $(this).children('iframe').show();
    $('#mtn').attr('src','../media/infographics.mp4');
  });
   
  $('.close').click(function(e){
     $('.blackestnight').hide();
     $('.item').removeClass('thefocus');
     $(this).css('display', 'none');
    $('.item').children('img').show();
    $('.item').children('iframe').hide();
    $('#mtn').attr('src', '');
    e.stopPropagation();
  });
});