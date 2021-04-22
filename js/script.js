$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true
    });
});
function func(elem){
    console.log(elem);
};

$(function(){
  $('.im_container').click(function(event) {
    var a = getComputedStyle(this).background;
    var beg=[];
for(i in a){
  if(a[i]=='"'){
    beg.push(i);
  }
}
     var b=a.slice(+beg[0]+1,beg[1]);    
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+b+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
     left: ($(document).width() - $('#magnify').outerWidth())/2,
     // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight())/2
   });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});
