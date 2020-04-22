
$('.carousel').carousel({
  interval: 5000
});

$('footer img').hover(
  function() {
    $(this).attr("src","images/logo3.png");
  },
  function() {
    $(this).attr("src","images/logo2.png");
  }
);
