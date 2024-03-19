// Write your JavaScript code here!

window.addEventListener("load", function() {

    const form = document.querySelector("form");
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        //List DOM
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById('faultyItems');

        //use formsubmission to validate and update list
        formSubmission(document,list,pilot,copilot,fuelLevel,cargoLevel);
    })

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets) 
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
    })
    // let button = document.getElementById("formSubmit")
    // button.addEventListener("click", function(event){
    //     event.preventDefault()
    //     formSubmission(
    //         document, document.getElementById("faultyItems"), document.getElementById("pilotName").value, document.querySelector("input[name=copilotName]").value,
    //         document.querySelector("input[name=fuelLevel]").value, document.querySelector("input[name=cargoMass]").value
    //     )
    // })

    
 });