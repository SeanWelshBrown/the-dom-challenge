/*** DOM ELEMENTS ***/
const counter = document.querySelector('#counter')
const plus = document.getElementById("+")
const minus = document.getElementById("-")
const like = document.getElementById("<3")
const likesList = document.querySelector(".likes")
const pauseButton = document.getElementById("pause")
const submitButton = document.getElementById("submit")

/*** EVENT LISTENERS ***/
plus.addEventListener("click", handleIncUp)
minus.addEventListener("click", handleIncDown)
like.addEventListener("click", handleLike)
pauseButton.addEventListener("click", handlePause)

/*** EVENT HELPERS ***/

// functions for incrementing counter up and down
function handleIncUp(event) {
  let currentCount = parseInt(counter.textContent)
  counter.textContent = currentCount + 1
};

function handleIncDown(event) {
  let currentCount = parseInt(counter.textContent)
  counter.textContent = currentCount - 1};

// function for adding likes to counter integers
function handleLike(event) {
  let currentCount = parseInt(counter.textContent)
  let NumLi = document.getElementById(`${currentCount}`)

  if (NumLi === null) {
    let newNumLi = document.createElement("li")
    newNumLi.id = `${currentCount}`
    newNumLi.textContent = `1 like on ${currentCount}!`
    likesList.append(newNumLi)
  } else {
    let existingNumLi = document.getElementById(`${currentCount}`)
    let existingNumLiArr = existingNumLi.textContent.split(" ")
    let numLikes = parseInt(existingNumLiArr[0])
    numLikes++;
    existingNumLiArr[0] = numLikes
    existingNumLi.textContent = existingNumLiArr.join(" ")
  };
};

// function for handling pause button
function handlePause(event) {
  if (pauseButton.textContent === " pause ") {
    plus.disabled = true;
    minus.disabled = true;
    like.disabled = true;
    submitButton.disabled = true;
    timerManager(false);
    pauseButton.textContent = " resume "
  } else if (pauseButton.textContent === " resume ") {
    plus.disabled = false;
    minus.disabled = false;
    like.disabled = false;
    submitButton.disabled = false;
    timerManager(true, timer, 1000);
    pauseButton.textContent = " pause "
  };
};

/*** OTHER FUNCTIONS ***/

//counter function
const timer = function() {
  let count = parseInt(counter.textContent)
  counter.textContent = count + 1
};
// flag function that allows counter to start and stop on "pause" button
function timerManager(onOffFlag, animation, time) {
  if(onOffFlag) {
    startTimer = setInterval(animation, time);
  } else {
    clearInterval(startTimer);
  };
}

/*** INITIAL RENDER FUNCTIONS ***/

timerManager(true, timer, 1000);