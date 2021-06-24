
// I thought I was using this modal code, but turns out I wasn't linking to this page and the modals worked fine... so delete this code?
// var modal = document.querySelector(".modal");
// var trigger = document.querySelector(".trigger");
// var closeButton = document.querySelector(".close-button");

// function toggleModal() {
//     modal.classList.toggle("show-modal");
// }

// function windowOnClick(event) {
//     if (event.target === modal) {
//         toggleModal();
//     }
// }

// trigger.addEventListener("click", toggleModal);
// closeButton.addEventListener("click", toggleModal);
// window.addEventListener("click", windowOnClick);

// calls all functions needed to start the game
function start() {
    renderScreen();
    removeButton();
}

// renders the starting screen a the beginning of the game
function renderScreen() {
    document.getElementById("main").removeAttribute("style");
}

// removes the Play the Game! button
function removeButton() {
    document.getElementById("startButton").remove()
}