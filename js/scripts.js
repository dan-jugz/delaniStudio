//initialize jquery 
$(document).ready(function () {

  //what we do section
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

  //potfolio section
  $(".read").hide();
  $(".box").hover(function () {
    $(this).find(".read").toggle(40);
  });
  
  //contact us email form
  $('#submission').submit(function (event) {
    var display1 = $('input:first').val();
    var display2 = $('input#mail').val();
    if (display1 && display2 != '') {
      alert('Thank you ' + display1 + ' your subscription is well received');
    } else {
      alert('Invalid input');
    }
    event.preventDefault();
  })
   $("button").on('click', function(){
    $('form').each(function(){
      this.reset();
    });
  });
});