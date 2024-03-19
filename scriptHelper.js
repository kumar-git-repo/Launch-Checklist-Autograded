// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    console.log(document.getElementById("missionTarget"))
    let missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML = `<h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">
    `; 
                 
 }

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty"
    } else if (isNaN(testInput)) {
        return "Not a Number"
    } else {
        return "Is a Number"
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let launchStatus = true
    if (validateInput(pilot) == "Empty" || validateInput(copilot) == "Empty" || validateInput(fuelLevel) == "Empty" || validateInput(cargoLevel) == "Empty") {
        window.alert("All fields are required!")
    }
    if(validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number') {
        window.alert("Pilots have to be names!");
    }

    if(validateInput(cargoLevel) === 'Not a Number' || validateInput(fuelLevel) === 'Not a Number') {
        window.alert("Fuel Level and Cargo Mass must be a number!");
    }

    if (validateInput(pilot)) {
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`
    }
    if (validateInput(copilot)) {
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`
    }
    if (validateInput(fuelLevel) != "Is a Number") {
        document.getElementById("fuelStatus").innerHTML = "Fuel is Not a Number"
        launchStatus = false
    }
    if (validateInput(cargoLevel) != "Is a Number") {
        document.getElementById("cargoStatus").innerHTML = "Cargo Mass is Not a Number"
        launchStatus = false
    }
    if (fuelLevel < 10000) {
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch"
        launchStatus = false
    } else {
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch"
    }
    if (cargoLevel > 10000) {
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch"
        launchStatus = false
    } else {
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch"
    }
    list.style.visibility = "visible"
    if (launchStatus === true) {
        document.getElementById("launchStatus").style.color = "green"
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch"
    } else {
        document.getElementById("launchStatus").style.color = "red"
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch"
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        console.log(response)     
        return response.json();
    });
    console.log(planetsReturned);
    return planetsReturned;
}

function pickPlanet(planets) {
    let planet = planets[Math.floor(Math.random()*planets.length)];
    return planet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;