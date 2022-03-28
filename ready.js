const READY = "READY"
const WORD_LENGTH = READY.length
const logo = document.getElementById('logo')
const keyboard = document.querySelector("[data-keyboard]")
const readyTiles = document.querySelector("[data-ready-tile-container]")
const alertContainer = document.querySelector("[data-alert-container]")
const about_button = document.getElementById('about-container')
const about_modal = document.getElementById('about-modal')
const instructions_button = document.getElementById('how-to-play-container')
const instructions_modal = document.getElementById('how-to-play-modal')
const close_about = document.getElementById('close-about') 
const close_instructions = document.getElementById('close-instructions') 



startInteraction()

function startInteraction() {
    document.addEventListener("click", handleMouseClick)
    document.addEventListener("keydown", handleKeyPress)

    // When logo is clicked, return to ready page
    // logo.addEventListener("click", () => {
    //     window.location.reload();
    // });

    // Opens the About modal
    about_button.addEventListener("click", () => {
        about_modal.classList.add('show');
    });

    // Opens the Instructions modal
    instructions_button.addEventListener("click", () => {
        instructions_modal.classList.add('show');
    });

    // Closes the About modal
    close_about.addEventListener("click", () => {
        about_modal.classList.remove('show');
    });

    close_instructions.addEventListener("click", () => {
        instructions_modal.classList.remove('show');
    });    
    
}

function stopInteraction() {
    document.removeEventListener("click", handleMouseClick)
    document.removeEventListener("keydown", handleKeyPress)
}

// Handles inputs from Mouse Clicks
function handleMouseClick(e) {
    if (e.target.matches("[data-key]")) {  // Pressed Letter Key
        pressKey(e.target.dataset.key)
        return
    }

    if (e.target.matches("[data-enter]")){ // Pressed Enter Key
        submitInput()
        return
    }

    if (e.target.matches("[data-delete]")){ // Pressed Delete Key
        deleteKey()
        return
    }
}

// Handles inputs from Keyboard
function handleKeyPress(e) {
    if (e.key == "Enter") {
        submitInput()
        return
    }

    if (e.key == "Backspace" || e.key == "Delete") {
        deleteKey()
        return
    }

    // Checks for any character from a-z with length of 1 letter
    if (e.key.match(/^[a-z]$/)){
        pressKey(e.key)
        return
    }
}


function pressKey(key) {
    const activeTiles = getActiveTiles()
    if (activeTiles.length >= WORD_LENGTH) return
    const nextTile = readyTiles.querySelector(":not([data-letter])")
    nextTile.dataset.letter = key.toLowerCase()
    nextTile.textContent = key
    nextTile.dataset.state = "active"
}

function deleteKey() {
    const activeTiles = getActiveTiles()
    const lastTile = activeTiles[activeTiles.length - 1]
    if (lastTile == null) return
    lastTile.textContent = ""
    delete lastTile.dataset.state
    delete lastTile.dataset.letter
}


function submitInput() {
    const activeTiles = [...getActiveTiles()]
    if (activeTiles.length != WORD_LENGTH) {
        showAlert("Not enough letters")
        shakeTiles(activeTiles)
        return
    }

    const input = activeTiles.reduce((word, tile) => {
        return word + tile.dataset.letter
    }, "")



    if (input.toUpperCase() != READY) {
        showAlert("Please type READY")
        shakeTiles(activeTiles)
        return
    }


    window.location.href = "game.html"
    stopInteraction()
    //activeTiles.forEach((...params) => flipTiles(...params, guess))
}


function getActiveTiles() {
    return readyTiles.querySelectorAll('[data-state="active"')
}

function getPopulatedTiles() {
    return readyTiles.querySelectorAll(':not([data-state="empty"])')
}

function showAlert(message, duration = 1000) {
    const alert = document.createElement("div")
    alert.textContent = message
    alert.classList.add("alert")
    alertContainer.prepend(alert)
    if (duration == null) return

    setTimeout(() => {
        alert.classList.add("hide")
        alert.addEventListener("animationend", () => {
            tile.classList.remove("shake")
        }, {once: true})
    })
}

function checkInput (input, tiles) {
    // Input as "READY" confirmed
    if (input.toUpperCase() === READY) {
        console.log(input)
        // Goes to the main game page found in index.html
        console.log("START GAME")
        danceTiles(tiles)
        
        //window.location.href = "index.html"
        //stopInteraction()
    }
    else
        showAlert("Please type READY")

    return
}

function shakeTiles(tiles) {
    tiles.forEach(tile => {
      tile.classList.add("shake")
      tile.addEventListener("animationend", () => {
        tile.classList.remove("shake")
      }, { once: true })
    })
  }


function danceTiles(tiles) {
    tiles.forEach((tile, index) => {
      setTimeout(() => {
        tile.classList.add("dance")
        tile.addEventListener(
          "animationend", 
          () => {
          tile.classList.remove("shake")
      }, { once: true }
      )
    }, index * DANCE_ANIMATION_DURATION / 5)
    })
  }