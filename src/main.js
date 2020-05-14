// Create variables targeting the relevant DOM elements here 👇
var coverTitle = document.querySelector(".cover-title");
var coverImg = document.querySelector(".cover-image");
var coverTagline = document.querySelector(".tagline");
var coverTaglineOne = document.querySelector(".tagline-1");
var coverTaglineTwo = document.querySelector(".tagline-2");
var randomCoverBtn = document.querySelector(".random-cover-button");

// We've provided a few variables below
// var savedCovers = [
//   new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
// ];
var currentCover = new Cover();

// Add your event listeners here 👇
randomCoverBtn.addEventListener('click', newRandomBook);

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function newRandomBook() {
  coverTitle.innerText = titles[getRandomIndex(titles)];
  coverTaglineOne.innerText = descriptors[getRandomIndex(descriptors)];
  coverTaglineTwo.innerText = descriptors[getRandomIndex(descriptors)];
  coverImg.src = covers[getRandomIndex(covers)];
}

newRandomBook();
