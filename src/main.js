// Create variables targeting the relevant DOM elements here 👇
var coverTitle = document.querySelector(".cover-title");
var coverImg = document.querySelector(".cover-image");
var coverTagline = document.querySelector(".tagline");
var coverTaglineOne = document.querySelector(".tagline-1");
var coverTaglineTwo = document.querySelector(".tagline-2");
var randomCoverBtn = document.querySelector(".random-cover-button");
var makeNewBtn = document.querySelector(".make-new-button");
var homeView = document.querySelector(".home-view");
var formView = document.querySelector(".form-view");
var saveCoverBtn = document.querySelector(".save-cover-button");
var homeBtn = document.querySelector(".home-button");
var viewSavedBtn = document.querySelector(".view-saved-button");
var savedCoverView = document.querySelector(".saved-covers-section");
// We've provided a few variables below
// var savedCovers = [
//   new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
// ];
var currentCover = new Cover();

// Add your event listeners here 👇
randomCoverBtn.addEventListener("click", newRandomBook);
makeNewBtn.addEventListener("click", showForm);
viewSavedBtn.addEventListener("click",showSaved);
homeBtn.addEventListener("click", showMain);
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

function showForm() {
  homeView.classList.add("hidden");
  formView.classList.remove("hidden");
  randomCoverBtn.classList.add("hidden");
  saveCoverBtn.classList.add("hidden");
  homeBtn.classList.remove("hidden");
}

function showSaved() {
  savedCoverView.classList.remove("hidden");
  homeView.classList.add("hidden");
  saveCoverBtn.classList.add("hidden");
  randomCoverBtn.classList.add("hidden");
  homeBtn.classList.remove("hidden");
}

function showMain() {
  formView.classList.add("hidden");
  homeView.classList.remove("hidden");
  homeBtn.classList.add("hidden");
  randomCoverBtn.classList.remove("hidden");
  saveCoverBtn.classList.remove("hidden");
}
