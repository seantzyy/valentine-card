"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons-container");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 20;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    adjustNoButtonPosition();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  window.location.href = "Confirmation.html"; 
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.2;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure?",
    "Are you really sure??",
    "Are you really really sure???",
    "How about a fifth chance?",
    "NO PADIN",
    "DALI NA :(",
    "AY AYAW MO TALAGA AH",
    "Ok now you're hurting my feelings!",
    "You're being mean!",
    "Why are u doing this to me? :(",
    "Give me a chance! Say YES",
    "Stop pushing this button!",
    "Come on, don't break my heart!",
    "HAHA ayaw mo talaga mag yes noh?",
    "Kala mo titigil ako? MAG YES KA NA",
    "Favorite mo talaga yung 'No' noh??",
    "I promise saying yes will make u smile :)",
    "Let's turn those no's into maybe's and then yes's! o diba cheesy",
    "Say yes and I'll bring snacks :*"
  ];

  if (noCount >= messages.length) {
    return null; // Indicates that messages are exhausted
  }

  return messages[noCount];
}

function changeImage(image) {
  catImg.src = `img/cat-0.gif`;
}

function updateNoButtonText() {
  const message = generateMessage(noCount);
  if (message === null) {
    setTimeout(() => {
      alert("YAN!, wala ka ng 'no' na choice YOU CAN ONLY SAY YES :P");
      noButton.style.display = "none"; 
    }, 200);
  } else {
    noButton.innerHTML = message;
  }
}

function adjustNoButtonPosition() {
  // Move the "No" button down as the "Yes" button grows
  const yesButtonHeight = yesButton.offsetHeight;
  noButton.style.marginTop = `${yesButtonHeight / 2}px`;
}

document.addEventListener("DOMContentLoaded", function () {
  const okButton = document.getElementById("okButton");

  if (okButton) {
      okButton.addEventListener("click", function () {
          window.location.href = "Gift.html"; // Redirect to the gift page
      });
  }
});



