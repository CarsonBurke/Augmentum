class Game {
    constructor() {

        const game = this

        game.buildMode
        game.paused

        game.objects = {

        }
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

    document.addEventListener('mousemove', game.followCursor)

    if(!game.buildPreview) game.buildPreview = new Structure('apartment', 0, 0, 0, 0, structureTypes['apartment'].transparentImage)
}

Game.prototype.exitBuildMode = function() {

    game.buildMode = false

    console.log('exitedBuildMode')

    document.removeEventListener('click', game.placeStructure)
}

Game.prototype.followCursor = function(event) {

    const type = game.selectedStructure
    
    const image = structureTypes[type].transparentImage
    
    game.buildPreview.image = image

    const width = structureTypes[type].width
    const height = structureTypes[type].height

    game.buildPreview.width = width
    game.buildPreview.height = height

    let left = event.clientX - game.canvas.getBoundingClientRect().left - width / 2

    left = Math.max(left, 0)
    left = Math.min(left, game.canvas.width - width)

    let top = event.clientY - game.canvas.getBoundingClientRect().top - height / 2

    top = Math.max(top, 0)
    top = Math.min(top, game.canvas.height - height)

    game.buildPreview.move(left, top)
}   

Game.prototype.placeStructure = function(event) {
    
    const type = game.selectedStructure

    const width = structureTypes[type].width
    const height = structureTypes[type].height

    let left = event.clientX - game.canvas.getBoundingClientRect().left - width / 2

    left = Math.max(left, 0)
    left = Math.min(left, game.canvas.width - width)

    let top = event.clientY - game.canvas.getBoundingClientRect().top - height / 2

    top = Math.max(top, 0)
    top = Math.min(top, game.canvas.height - height)
    
    const image = structureTypes[type].image

    const structure = new Structure(type, left, top, 16, 21, image)
}