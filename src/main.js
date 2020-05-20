var homeBtn = document.querySelector(".home-button");
var randomCoverBtn = document.querySelector(".random-cover-button");
var saveCoverBtn = document.querySelector(".save-cover-button");
var viewSavedBtn = document.querySelector(".view-saved-button");
var makeNewBtn = document.querySelector(".make-new-button");
var homeView = document.querySelector(".home-view");
var coverImg = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var coverDescriptor = document.querySelector(".tagline");
var coverDescriptorOne = document.querySelector(".tagline-1");
var coverDescriptorTwo = document.querySelector(".tagline-2");
var savedViewSec = document.querySelector(".saved-view")
var savedCoverView = document.querySelector(".saved-covers-section");
var formView = document.querySelector(".form-view");
var coverInput = document.getElementById("cover");
var titleInput = document.getElementById("title");
var descriptorOneInput = document.getElementById("descriptor1");
var descriptorTwoInput = document.getElementById("descriptor2");
var createNewBookBtn = document.querySelector(".create-new-book-button");
var savedCovers = [];
var currentCover;

randomCoverBtn.addEventListener("click", newRandomBook);
makeNewBtn.addEventListener("click", showForm);
viewSavedBtn.addEventListener("click",showSaved);
homeBtn.addEventListener("click", showMain);
createNewBookBtn.addEventListener("click", createNewInput);
saveCoverBtn.addEventListener("click", addToSavedArray);
saveCoverBtn.addEventListener("click", displaySavedCovers);
savedCoverView.addEventListener("dblclick", function(event) {
  var titleToRemove = savedCovers[event.target.id].title
  titles = titles.filter(function(element) {
    return titleToRemove != element;
  })
  var coverToRemove = savedCovers[event.target.id].cover
  covers = covers.filter(function(element) {
    return coverToRemove != element;
  })
  var descriptorToRemoveOne = savedCovers[event.target.id].tagline1
  var descriptorToRemoveTwo = savedCovers[event.target.id].tagline2
  descriptors = descriptors.filter(function(element) {
    return descriptorToRemoveOne != element && descriptorToRemoveTwo != element;
  })
  savedCovers.splice(event.target.id,1);
  document.getElementById(event.target.id).remove();

})

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function newRandomBook() {
  coverTitle.innerText = titles[getRandomIndex(titles)];
  coverDescriptorOne.innerText = descriptors[getRandomIndex(descriptors)];
  coverDescriptorTwo.innerText = descriptors[getRandomIndex(descriptors)];
  coverImg.src = covers[getRandomIndex(covers)];
  currentCover = new Cover(coverImg.src, coverTitle.innerText, coverDescriptorOne.innerText, coverDescriptorTwo.innerText)
}

window.onload = newRandomBook();

function displayNewBook() {
  coverTitle.innerText = currentCover.title;
  coverDescriptorOne.innerText = currentCover.tagline1;
  coverDescriptorTwo.innerText = currentCover.tagline2;
  coverImg.src = currentCover.cover;
}

function showForm() {
  homeView.classList.add("hidden");
  formView.classList.remove("hidden");
  randomCoverBtn.classList.add("hidden");
  saveCoverBtn.classList.add("hidden");
  homeBtn.classList.remove("hidden");
  savedViewSec.classList.add("hidden");
}

function showSaved() {
  displaySavedCovers();
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
  currentCover = new Cover(coverInput.value, titleInput.value, descriptor1.value, descriptor2.value);
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
  titles.push(currentCover.title);
  covers.push(currentCover.cover);
  descriptors.push(currentCover.tagline1);
  descriptors.push(currentCover.tagline2);
}

function compareSavedCovers(newCover, existingCover) {
  return newCover.cover === existingCover.cover && newCover.title === existingCover.title && newCover.tagline1 === existingCover.tagline1 && newCover.tagline2 === existingCover.tagline2;
}

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
