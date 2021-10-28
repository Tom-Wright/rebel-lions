// calls all functions needed to start the game
function start() {
    // render the starting elements on the screen by removing the display:none property
    renderScreen();
    // remove the Play the Game! button from the DOM
    removeButton();
    // display the village container
    // displayVillageStats();
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

/*
This function
is my current
work in progress

I also need to figure out how to change the color of the progress bars based on loyalty. That'll be its own function.
*/
// displays individual village statistics and image in the village container (upper-right quadrant)
function displayVillageStats(selectedVillageId) {
    // find the village matching the passed value
    let selectedVillage = villages.find(village => village.id === selectedVillageId)
    // overwrite current inner HTML values with new village variables
    // declare new variable for getting selectedVillageImage by id to save processing overhead (going through the HTML and finding the id and returning a JS object)
    let villageImageId = document.getElementById("selectedVillageImage")
    // set image src and alt attributes
    villageImageId.setAttribute("src",selectedVillage.image)
    villageImageId.setAttribute("alt",selectedVillage.name)
    // declare new variable for getting selectedVillageProgressBar by id to save processing overhead
    let villageProgressBar = document.getElementById("selectedVillageProgressBar")
    // set progress bar style and aria-valuenow attributes
    villageProgressBar.setAttribute("style",`width: ${village.loyalty}%`)
    villageProgressBar.setAttribute("aria-valuenow", village.loyalty)
    // declare new variable for getting selectedVillageTitle by id to save processing overhead
    let villageTitle = document.getElementById("selectedVillageTitle")
    // set village name inner HTML
    villageTitle.innerHTML = village.name
    // declare new variable for getting villageModalTitle by id to save processing overhead
    let villageModalTitle = document.getElementById("villageModalTitle")
    // set village modal title inner HTML
    villageModalTitle.innerHTML = village.name
    // declare new variable for getting villageEncyclopediaBody by id to save processing overhead
    let villageEncyclopediaBody = document.getElementById("villageEncyclopediaBody")
    // set village encyclopedia body text inner HTML
    villageEncyclopediaBody.innerHTML = village.encyclopedia
    // declare new variables for getting villageMinesRefineries, villageBuildings, villageTraining, villageVehicleFactories by id to save processing overhead
    let villageMines = document.getElementById("villageMinesRefineries")
    let villageBuildings = document.getElementById("villageBuildings")
    let villageTraining = document.getElementById("villageTraining")
    let villageVehicleFactories = document.getElementById("villageVehicleFactories")
    // set village mines, buildings, training, and vehicle factory stat variables inner HTML
    villageMines.innerHTML = village.mines
    villageBuildings.innerHTML = village.buildingSites
    villageTraining.innerHTML = village.trainingGrounds
    villageVehicleFactories.innerHTML = village.vehicleFactories
    // declare new variable for getting selectedVillageRegion by id to save processing overhead
    let selectedVillageRegion = document.getElementById("selectedVillageRegion")
    // set region text under village heading inner HTML
    selectedVillageRegion.innerHTML = village.region
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
        // create a button, assign the class, assign the village.name as its text content, and append it to the map container
        let button = document.createElement("button")
        button.className = "btn btn-outline-success"
        button.textContent = village.name
        mapContainer.appendChild(button)
        // create a break variable and append it to the button to position the image correctly
        const lineBreak = document.createElement("br")
        button.appendChild(lineBreak)
        // create an image variable, set it to the corresponding image from villages-array, and append it to the button
        let villageImage = document.createElement("img")
        villageImage.setAttribute("src",village.image)
        button.appendChild(villageImage)
        // add another break to position the progress bar correctly
        const secondLineBreak = document.createElement("br")
        button.appendChild(secondLineBreak)
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
        // progressbar.setAttribute("aria-describedby",buttonId)
        // make the inner progressbar div a child of the outer progress div
        progress.appendChild(progressbar)
        // add the entire progress bar (both divs) to the button
        button.appendChild(progress)
    }
}