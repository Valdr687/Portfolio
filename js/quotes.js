function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

quotes = [ "lowpoly artist.", "phototaker.", "frontend enthusiast."];

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