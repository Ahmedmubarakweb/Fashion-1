//this fucntion run silder

$('.carousel').carousel({
  interval: 5000  //speed of slidee
});

//this function change logo in footer
$('footer img').hover(
  function() {
    $(this).attr("src","images/logo3.png");
  },
  function() {
    $(this).attr("src","images/logo2.png");
  }
);

// scroll top button
var btnscroll=$('.move-up');
btnscroll.hide();
$(window).scroll(function(){
   //if height is 1000 show the icon else make it hide
    if($(this).scrollTop()>800)
    btnscroll.show();
    else
    btnscroll.hide();
});
// when btnscroll is clicked page will scroll to top
btnscroll.click(function(){
    $('html,body').animate({scrollTop:0},700);
});
