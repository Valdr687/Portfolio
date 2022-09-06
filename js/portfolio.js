$(document).ready(function(){
  $(".image").click(function(){
    $(this).toggleClass("image-actif");
    $("img").toggle();
    $(this).children('img').show()
    $('*').toggleClass("barre-cache");
    $('body').toggleClass("body-image");
  });
});

$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    $('body').toggleClass("menu");

  });
});






