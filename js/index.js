//Variables & fonctions
var NbrTelechargementPMC = 4_233;
DownloadThreshold = {"4000": "four thousands","5000": "five thousands","6000": "six thousands",
"7000": "seven thousands","8000": "eight thousands","9000": "eight thousands","10000": "ten thousands",
"15000": "fifteen thousands","20000": "twenty thousands",}
NombreImage=7
ConfigImage=[]
AltImage=[]

function getKey(number) {
  number = Math.floor(number/1000)*1000;
  if (number <= 10_000) {
    return number.toString() ;
  }
  else if ( number <= 15_000) {
    return "15000"
  }
  else if ( number <= 20_000) {
    return "20000"
  }
}

// API 

function getData(id, callback) {
  $.ajax({
      type: "GET",
      url: "https://api.modrinth.com/v2/project/"+id,
      dataType: "json",
      success: callback,
      error: function(error) {
        console.log(error);
      }
  });
}

getData(id, function(response) {
    return response.downloads ;
});

var downloads = NbrTelechargementPMC + getDownloads('LBcosBrl')

//Insertion des variables

$(document).ready(function () {
  $("#id").text(DownloadThreshold[getKey(downloads)]);
});

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





//Menu










