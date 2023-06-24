function init () {
let takeoff = document.getElementById("takeoff")
let flightStatus = document.getElementById("flightStatus")
let shuttleBackground = document.getElementById("shuttleBackground")
let spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
let landing = document.getElementById("landing")
let up = document.getElementById("up")
let down = document.getElementById("down")
let left = document.getElementById("left")
let right = document.getElementById("right")
let abortMission = document.getElementById("missionAbort")
let rocket = document.getElementById("rocket")
rocket.style.position = "absolute"
rocket.style.left = "0px"
rocket.style.bottom = "0px"
// let shuttleWidth = document.getElementById("shuttleWidth")

takeoff.addEventListener("click", (event) =>{
    let response = window.confirm("Confirm that the shuttle is ready for takeoff")
        if(response === true){
            flightStatus.innerHTML = "Shuttle in flight"
            shuttleBackground.style.backgroundColor = 'blue'
            spaceShuttleHeight.innerHTML = '10000'
        }

   
})

landing.addEventListener("click", (event) =>{
    window.alert("The shuttle is landing. Landing gear engaged.")
    flightStatus.innerHTML = "The shuttle has landed."
    shuttleBackground.style.backgroundColor = 'green'
    spaceShuttleHeight.innerHTML = '0';
    rocket.style.bottom = "0px";
    rocket.style.left = "0px";
})

abortMission.addEventListener("click", (event) =>{
    let response = window.confirm("Confirm that you want to abort the mission.")
        if(response = true){
            flightStatus.innerHTML =  "Mission aborted."
            shuttleBackground.style.backgroundColor = 'green'
            spaceShuttleHeight.innerHTML = '0'
            rocket.style.bottom = "0px";
            rocket.style.left = "0px";

        }

})
    left.addEventListener("click", (event) =>{
        rocket.style.left = '10px'
    })

    right.addEventListener("click", (event) =>{
        rocket.style.right = '10px'
    })

    up.addEventListener("click", (event) =>{
        rocket.style.top = '10px'
        spaceShuttleHeight.innerHTML = (spaceShuttleHeight.innerHTML) + 10000
    })
    down.addEventListener("click", (event) =>{
        rocket.style.bottom = '10px'
        spaceShuttleHeight.innerHTML = (spaceShuttleHeight.innerHTML) - 10000
    })
}
window.addEventListener("load", init);