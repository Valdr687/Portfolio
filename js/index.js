//Variables 
var NbrTelechargementPMC = 4_233;
var DownloadThreshold = {"4000": "four thousands","5000": "five thousands","6000": "six thousands",
"7000": "seven thousands","8000": "eight thousands","9000": "eight thousands","10000": "ten thousands",
"15000": "fifteen thousands","20000": "twenty thousands",}
NombreImage=7
ConfigImage=[]
AltImage=[]

// API 
/*
$(document).ready(function() {
  $.ajax({
    url: "https://api.modrinth.com/v2/project/LBcosBrl",
    type: "GET",
    dataType: "json",
    success: function(result) {
      var data = result;
      console.log("Nombre de téléchargements Modrinth" + data.downloads )
      $("#res").text(textString);
    },
    error: function(error) {
      console.log(error);
    }
  });
});
*/

// Carousel 
for (let i=0;i<NombreImage;i++) {
  ConfigImage.push(i+1)
}

function arrayRotate(arr, reverse) {
  if (reverse) arr.unshift(arr.pop());
  else arr.push(arr.shift());
  return arr;
}

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


//Insertion des variables


//Menu










