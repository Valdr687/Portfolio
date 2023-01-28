//Variables textuelles
var MonAge ;
var NbrTelechargementPMC = "4 233";
var NbrVuesPMC = "22 732";
var ScorePIX = 768;

// Variables & fonctions pages
NombreImage=7
ConfigImage=[]
for (let i=0;i<NombreImage;i++) {
  ConfigImage.push(i+1)
}

function arrayRotate(arr, reverse) {
  if (reverse) arr.unshift(arr.pop());
  else arr.push(arr.shift());
  return arr;
}


//Calcul de l'age

var dob = new Date("12/11/2005");  //Format américain ! : MM/JJ/AAAA
var month_diff = Date.now() - dob.getTime();  
var age_dt = new Date(month_diff); 
var year = age_dt.getUTCFullYear(); 

var MonAge = Math.abs(year - 1970);  

//Insertion des variables

/*$(document).ready(function(){
    $('#age').text("Je m'appelle Thomas Casanova, j'ai "+ MonAge +" ans. Je suis en terminale à Viala Lacoste, lycée général privé en Provence, dans une filière scientifique.");
    $('#valdr').html("Sur internet, on me connait sous ce pseudonyme. On peut me retrouver sur <a href='https://www.planetminecraft.com/member/valdr687/' target='_blank'>Planet Minecraft</a>, où mes créations ont fait "+ NbrTelechargementPMC +" téléchargements et "+ NbrVuesPMC +" vues.");

});*/

//Menu



//Animation 

function agencement(tab) {
  $("#img1").attr("src", "./images/illustration/"+tab[0]+".png");
  $("#img2").attr("src", "./images/illustration/"+tab[1]+".png");
  $("#img3").attr("src", "./images/illustration/"+tab[2]+".png");
}

$(document).ready(function () {
  $(".next").click(function () { 
    ConfigImage=arrayRotate(ConfigImage)
    agencement(ConfigImage)
  });
});

$(document).ready(function () {
  $(".prev").click(function () { 
    ConfigImage=arrayRotate(ConfigImage,true)
    agencement(ConfigImage)
  });
});




