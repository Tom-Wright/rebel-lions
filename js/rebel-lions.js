// calls all functions needed to start the game
function start() {
    // render the starting elements on the screen by removing the display:none property
    renderScreen();
    // remove the Play the Game! button from the DOM
    removeButton();
    // display the Map of the Ministry
    villagesAsButtons(villages);
}

// renders the starting screen at the beginning of the game by removing the display:none property
function renderScreen() {
    document.getElementById("main").removeAttribute("style");
}

// removes the Play the Game! button from the DOM
function removeButton() {
    document.getElementById("startButton").remove()
}

// displays the villages in villages-array.js as HTML buttons
function villagesAsButtons(villages) {
    let mapContainer = document.getElementById("mapContainer")
    // declare new variable currentHeading to compare against village.region to see if a heading needs to be added
    let currentHeading = "";
    // iterate through the villages
    for (let village of villages) {
        // if the current heading isn't equal to the village's region, create an h3, assign the village region to it as text content, and append it to the map container
        if (currentHeading !== village.region) {
            let h3 = document.createElement("h3")
            h3.textContent = village.region
            mapContainer.appendChild(h3)
        }
        // assign the currentHeading to the village.region for the previous comparison (so it won't add another heading until the region changes)
        currentHeading = village.region;
        // create a button, assign the village.name as its text content, and append it to the map container
        let button = document.createElement("button")
        button.textContent = village.name
        mapContainer.appendChild(button)
        // create an outer div for the progress bar (Bootstrap needs an outer div), then set its class name
        let progress = document.createElement("div")
        progress.className = "progress"
        // create the inner div for the progress bar (Bootstrap needs an inner div), then set its class name
        let progressbar = document.createElement("div")
        progressbar.className = "progress-bar bg-success"
        // set each attribute for the progress bar (the style is for the visual aspect, the rest is for screen readers)
        progressbar.setAttribute("role","progressbar")
        progressbar.setAttribute("style",`width: ${village.loyalty}%`)
        progressbar.setAttribute("aria-valuenow", village.loyalty)
        progressbar.setAttribute("aria-valuemin","0")
        progressbar.setAttribute("aria-valuemax","100")
        // set the id of the village button
        let buttonId = `village${village.id}`
        button.setAttribute("id",buttonId)
        // set the aria-describedby attribute of the progress bar to the id of the button and assign it to the progress bar
        progressbar.setAttribute("aria-describedby",buttonId)
        // make the inner progressbar div a child of the outer progress div
        progress.appendChild(progressbar)
        // add the entire progress bar (both divs) to the mapContainer
        mapContainer.appendChild(progress)
    }
}