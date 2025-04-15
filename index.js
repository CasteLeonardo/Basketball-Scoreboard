let homeScore = document.getElementById("home-Score")
let guestScore = document.getElementById("guest-Score")

let home = 0
let guest = 0


//Home buttons

function addOneHome() {
    home += 1
    homeScore.textContent = home
}

function addTwoHome() {
    home += 2
    homeScore.textContent = home
}

function addThreeHome() {
    home += 3
    homeScore.textContent = home
}

//Guest buttons

function addOneGuest() {
    guest += 1
    guestScore.textContent = guest
}

function addTwoGuest() {
    guest += 2
    guestScore.textContent = guest
}

function addThreeGuest() {
    guest += 3
    guestScore.textContent = guest
}

//New Game
function newGame() {
    home = 0
    homeScore.textContent = home
    guest = 0
    guestScore.textContent = guest
}


