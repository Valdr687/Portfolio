//Variables & fonctions
NombreImage=9
ConfigImage=[]
AltImage=[]
quotes = [ "lowpoly artist.", "phototaker.", "frontend enthusiast."];

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

//Word carousel

async function displayQuotes(tab,delay) {
  for (let i in tab) {
    var quoteDisplayed = tab[i];
    var word = "";
    for (let j in quoteDisplayed) {
      if (quoteDisplayed[j] == " ") {
        await sleep(delay/2);
      }
      else {
        await sleep(delay);
      }
      word += quoteDisplayed[j];
      $("#txt-rotate").text(word);
      //console.log(word) //Le commentaire permet de ne pas polluer la console
    }
    await sleep(delay*2);
  }
  displayQuotes(tab,delay);
}
displayQuotes(quotes,200);

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










