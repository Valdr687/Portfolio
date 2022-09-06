//Variables textuelles
var MonAge ;
var NbrTelechargementPMC = "3 260";
var NbrVuesPMC = "18 004";
var ScorePIX = 626;

//Calcul de l'age

var dob = new Date("12/11/2005");  //Format américain ! : MM/JJ/AAAA
var month_diff = Date.now() - dob.getTime();  
var age_dt = new Date(month_diff); 
var year = age_dt.getUTCFullYear(); 

var MonAge = Math.abs(year - 1970);  

//Insertion des variables

$(document).ready(function(){
    $('#age').text("Je m'appelle Thomas Casanova, j'ai "+ MonAge +" ans. Je suis en terminale à Vialà Lacoste, lycée général privé en Provence, dans une filière scientifique.");
    $('#valdr').html("Sur internet, on me connait sous ce pseudonyme. On peut me retrouver sur <a href='https://www.planetminecraft.com/member/valdr687/' target='_blank'>Planet Minecraft</a>, où mes créations ont fait "+ NbrTelechargementPMC +" téléchargements et "+ NbrVuesPMC +" vues.");

});
  


