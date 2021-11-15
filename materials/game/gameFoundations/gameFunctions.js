Game.prototype.init = function() {

    const game = this

    // Create ID

    game.ID = newID()

    // Create canvas and add to document's body

    game.canvas = document.createElement('canvas')

    game.canvas.ID = game.ID

    document.body.appendChild(game.canvas)

    // Style canvas

    game.canvas.width = gameWidth
    game.canvas.height = gameHeight

    game.canvas.classList.add('canvas')

    // Create canvas manager by configuring canvas context

    game.cm = game.canvas.getContext('2d')
}