function init () {
const takeoff = document.getElementById("takeoff")
const flightStatus = document.getElementById("flightStatus")
let shuttleBackground = document.getElementById("shuttleBackground")
let spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
const landing = document.getElementById("landing")
const up = document.getElementById("up")
const down = document.getElementById("down")
const left = document.getElementById("left")
const right = document.getElementById("right")
const abortMission = document.getElementById("missionAbort")

takeoff.addEventListener("click", (event) =>{
    let response = window.confirm("Confirm that the shuttle is ready for takeoff")
        if(response === true){
            flightStatus.innerHTML = "Shuttle in flight"
            shuttleBackground.style.backgroundColor === 'blue'
            spaceShuttleHeight += 10000
        }

   
})

landing.addEventListener("click", (event) =>{
    window.alert("The shuttle is landing. Landing gear engaged.")
    flightStatus.innerHTML = "The shuttle has landed."
    shuttleBackground.style.backgroundColor === " "
    spaceShuttleHeight = 0
})

abortMission.addEventListener("click", (event) =>{
    let response = window.confirm("Confirm that you want to abort the mission.")
        if(response = true){
            flightStatus.innerHTML =  "Mission aborted."
            shuttleBackground.style.backgroundColor === ' '
            spaceShuttleHeight = 0
        }

})
left.addEventListener("click", (event) =>{
        shuttleBackground.width = shuttleBackground.width - 10
        spaceShuttleHeight = 0
})

    right.addEventListener("click", (event) =>{
        shuttleBackground.width = shuttleBackground.width + 10
        spaceShuttleHeight = 0
    })
    up.addEventListener("click", (event) =>{
        shuttleBackground.height = shuttleBackground.height + 10
        spaceShuttleHeight += 10
    })
    down.addEventListener("click", (event) =>{
        shuttleBackground.height = shuttleBackground.height - 10
        spaceShuttleHeight -= 10
    })
}
window.addEventListener("load", init);