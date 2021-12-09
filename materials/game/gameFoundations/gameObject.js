class GameObject {
    constructor(left, top, width, height, image) {

        const gameObj = this

        gameObj.left = left
        gameObj.top = top
        gameObj.right = gameObj.left + gameObj.width
        gameObj.bottom = gameObj.top + gameObj.height

        gameObj.width = width
        gameObj.height = height

        gameObj.image = image

        gameObj.id = newID()
    }
}

GameObject.prototype.draw = function() {

    const gameObject = this

    game.cm.drawImage(gameObject.image, gameObject.left, gameObject.top, gameObject.width, gameObject.height)
}

GameObject.prototype.move = function(left, top) {

    const gameObject = this

    gameObject.left = left
    gameObject.top = top
}