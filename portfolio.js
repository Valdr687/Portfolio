$(document).ready(function(){
  $(".image").click(function(){
    $(this).toggleClass("image-actif");
    $("img").toggle();
    $(this).children('img').show()
    $(this).parent().parent().toggleClass("section-plein-ecran")
    $('body').toggleClass("body-image");
    $('main').toggleClass("main-image");
    $('html').toggleClass("barre-cache");
    $('html').toggleClass("html-image");
  });
});

$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    $('body').toggleClass("menu");
    
  });
});






