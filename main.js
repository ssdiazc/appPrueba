const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");
const modalBody = document.getElementById("modal-boddy-text");
const modalButtonClose = document.getElementById("button-modal-close");
const modalButtonRestart = document.getElementById("button-modal-restart");

const modalLabel = "Me decepcionas :c";

modalBody.innerHTML = modalLabel;

function moveRandomButtonPosition(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 80 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 80 + 5) + "%";
}

noButton.addEventListener("mouseover", (event) => {
  moveRandomButtonPosition(noButton);
});

modalButtonRestart.addEventListener("click", (e) => {
  window.location.reload();
});
