$(document).ready(function () {

  $(".tap0").click(function () {
    $(".what0").slideToggle(1000);
    $(".here0").slideToggle(1200);
  });

  $(".tap1").click(function () {
    $(".what1").slideToggle(1000);
    $(".here1").slideToggle(1200);
  });
  $(".tap2").click(function () {
    $(".what2").slideToggle(1000);
    $(".here2").slideToggle(1200);
  });


  $(".read").hide();
  $(".box").hover(function () {
    $(this).find(".read").toggle(400);
  });
  $('.read').hover(function () {
    $(this).animate({ opacity: '1' });
  }, function () {
    $(this).animate({ opacity: '0' });
  })
  
});