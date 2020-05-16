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
// var savedCovers = [
//   new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
// ];
// https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80
// var currentCover = new Cover();
// // var currentCover = new Cover(titleInput.value, coverInput.value, descriptor1.value, descriptor2.value);
var currentCover;

// Add your event listeners here :point_down:
randomCoverBtn.addEventListener("click", newRandomBook);
makeNewBtn.addEventListener("click", showForm);
viewSavedBtn.addEventListener("click",showSaved);
homeBtn.addEventListener("click", showMain);
createNewBookBtn.addEventListener("click", createNewInput);

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
  // targetTitle.innerText   = currentCover.title;
  // console.log(targetTitle)
  // var blah = document.querySelector('.cover-image')
  // blah.innerText = currentCover.title;
  // targetDescriptorOne.innerText = currentCover.descriptor1;
  // targetDescriptorTwo.innerText = currentCover.descriptor2;
  // targetCover.src = currentCover.coverImgSrc;
  // formView.classList.add("hidden");
  // homeView.classList.remove("hidden");
}
function showForm() {
  homeView.classList.toggle("hidden");
  formView.classList.toggle("hidden");
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
