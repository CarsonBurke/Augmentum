class Game {
    constructor() {

        const game = this

        game.buildMode
        game.paused
    }
}

Game.prototype.init = function() {

    // Create ID

    game.ID = newID()

    // Create canvas and add to document's body

    game.canvas = document.createElement('canvas')

    game.canvas.ID = game.ID

    document.body.appendChild(game.canvas)

    // Style canvas

    game.canvas.width = gameWidth
    game.canvas.height = gameHeight

    game.canvas.style.margin = '20px'

    game.canvas.classList.add('canvas')

    // Create canvas manager by configuring canvas context

    game.cm = game.canvas.getContext('2d')

    // Turn off anti-aliasing

    game.cm.imageSmoothingEnabled = false

    //

    document.addEventListener('keydown', game.useHotkeys)
}

Game.prototype.useHotkeys = function(event) {

    const key = event.key

    if (key == 'b') {

        game.toggleBuildMode()
        return
    }
    if (key == 'Escape') {
        
        game.togglePause()
        return
    }
    if (key == "Enter") {

        if (game.paused) game.unPause()
        return
    }
}

Game.prototype.togglePause = function() {

    // If paused

    if (game.paused) {

        // Exit build mode

        game.unPause()
        return
    }

    // If not paused

    game.pause()
    return
}


Game.prototype.pause = function() {

    toggleUI('menuButton', 'home')

    game.paused = true
}

Game.prototype.unPause = function() {

    hideEl('home')
    hideEl('settings')
    showEl('menuButton')

    game.paused = false
}

Game.prototype.toggleBuildMode = function() {
    
    // If in build mode

    if (game.buildMode) {

        // Exit build mode

        game.exitBuildMode()
        return
    }

    // If not in build mode

    game.enterBuildMode()
    return
}

Game.prototype.enterBuildMode = function() {

    game.buildMode = true

    game.selectedStructure = 'apartment'

    console.log('enteredBuildMode')

    document.addEventListener('click', game.placeStructure)
}

Game.prototype.exitBuildMode = function() {

    game.buildMode = false

    console.log('exitedBuildMode')

    document.removeEventListener('click', game.placeStructure)
}

Game.prototype.placeStructure = function(event) {
    
    const type = game.selectedStructure

    const left = event.clientX - game.canvas.getBoundingClientRect().left

    if (left < 0) return
    if (left > game.canvas.width) return

    const top = event.clientY - game.canvas.getBoundingClientRect().top

    if (top < 0) return
    if (top > game.canvas.height) return

    const image = document.getElementById('apartment')

    const structure = new Structure(type, left, top, 16, 21, image)

    structure.draw()
}