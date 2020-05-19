// Create variables targeting the relevant DOM elements here :point_down:
var coverTitle = document.querySelector(".cover-title");
var coverImg = document.querySelector(".cover-image");
var coverDescriptor = document.querySelector(".tagline");
var coverDescriptorOne = document.querySelector(".tagline-1");
var coverDescriptorTwo = document.querySelector(".tagline-2");
var randomCoverBtn = document.querySelector(".random-cover-button");
var makeNewBtn = document.querySelector(".make-new-button");
var homeView = document.querySelector(".home-view");
var formView = document.querySelector(".form-view");
var saveCoverBtn = document.querySelector(".save-cover-button");
var homeBtn = document.querySelector(".home-button");
var viewSavedBtn = document.querySelector(".view-saved-button");
var savedCoverView = document.querySelector(".saved-covers-section");
var savedViewSec = document.querySelector(".saved-view")
var createNewBookBtn = document.querySelector(".create-new-book-button");
var coverInput = document.getElementById("cover");
var titleInput = document.getElementById("title");
var descriptorOneInput = document.getElementById("descriptor1");
var descriptorTwoInput = document.getElementById("descriptor2");
var targetCover = document.querySelector(".user-cover");
var targetTitle = document.querySelector(".user-title");
var targetDescriptorOne = document.querySelector(".user-desc1")
var targetDescriptorTwo = document.querySelector(".user-desc2")


// We've provided a few variables below
var savedCovers = [];
//   new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
// https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80
// var currentCover = new Cover();
// // var currentCover = new Cover(titleInput.value, coverInput.value, descriptor1.value, descriptor2.value);
// var currentCover;

// Add your event listeners here :point_down:
randomCoverBtn.addEventListener("click", newRandomBook);
makeNewBtn.addEventListener("click", showForm);
viewSavedBtn.addEventListener("click",showSaved);
// viewSavedBtn.addEventListener("click",)
homeBtn.addEventListener("click", showMain);
createNewBookBtn.addEventListener("click", createNewInput);
saveCoverBtn.addEventListener("click", addToSavedArray);
saveCoverBtn.addEventListener("click", displaySavedCovers);

// Create your event handlers and other functions here :point_down:
// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function newRandomBook() {
  coverTitle.innerText = titles[getRandomIndex(titles)];
  coverDescriptorOne.innerText = descriptors[getRandomIndex(descriptors)];
  coverDescriptorTwo.innerText = descriptors[getRandomIndex(descriptors)];
  coverImg.src = covers[getRandomIndex(covers)];
}

// newRandomBook();

newRandomBook();

function displayNewBook() {
  coverTitle.innerText = currentCover.title;
  coverDescriptorOne.innerText = currentCover.tagline1;
  coverDescriptorTwo.innerText = currentCover.tagline2;
  coverImg.src = currentCover.cover;
}

function showForm() {
  homeView.classList.add("hidden");//CHANGED
  formView.classList.remove("hidden");
  randomCoverBtn.classList.add("hidden");
  saveCoverBtn.classList.add("hidden");
  homeBtn.classList.remove("hidden");
  savedViewSec.classList.add("hidden");//ADDED
}
function showSaved() {
  savedCoverView.classList.remove("hidden");
  homeView.classList.add("hidden");
  saveCoverBtn.classList.add("hidden");
  randomCoverBtn.classList.add("hidden");
  homeBtn.classList.remove("hidden");
  savedViewSec.classList.remove("hidden");
  formView.classList.add("hidden");
}
function showMain() {
  formView.classList.add("hidden");
  homeView.classList.remove("hidden");
  homeBtn.classList.add("hidden");
  randomCoverBtn.classList.remove("hidden");
  saveCoverBtn.classList.remove("hidden");
  savedViewSec.classList.add("hidden");
}
function createNewInput(event) {
  event.preventDefault();
  titles.push(titleInput.value);
  covers.push(coverInput.value);
  descriptors.push(descriptor1.value);
  descriptors.push(descriptor2.value);
  currentCover = new Cover( coverInput.value, titleInput.value, descriptor1.value, descriptor2.value);
  displayNewBook();
  showMain();
}

function addToSavedArray() {
  for (var i = 0; i < savedCovers.length; i++) {
    if (compareSavedCovers(currentCover, savedCovers[i])) {
      return;
    }
  }
  savedCovers.push(currentCover)
}

function compareSavedCovers(newCover, existingCover) {
  return newCover.cover === existingCover.cover && newCover.title === existingCover.title && newCover.tagline1 === existingCover.tagline1 && newCover.tagline2 === existingCover.tagline2;
}
addToSavedArray();

function displaySavedCovers() {
  savedCoverView.innerHTML = "";
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoverView.innerHTML += `
    <section class = "mini-cover" id = "${i}">
      <img class="cover-image" id = "${i}" src="${savedCovers[i].cover}">
      <h2 class="cover-title" id = "${i}">${savedCovers[i].title}</h2>
      <h3 class="tagline" id = "${i}">A tale of <span class= "tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    </section>
      `
  }
}

displaySavedCovers();
