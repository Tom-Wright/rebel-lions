// calls all functions needed to start the game
function start() {
    // render the starting elements on the screen by removing the display:none property
    renderScreen();
    // remove the Play the Game! button from the DOM
    removeButton();
}

// renders the starting screen at the beginning of the game by removing the display:none property
function renderScreen() {
    document.getElementById("main").removeAttribute("style");
}

// removes the Play the Game! button from the DOM
function removeButton() {
    document.getElementById("startButton").remove()
}