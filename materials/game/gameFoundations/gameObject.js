class GameObject {
    constructor(type, left, top, width, height, image) {

        const gameObj = this

        gameObj.type = type
        gameObj.left = left
        gameObj.top = top
        gameObj.right = gameObj.left + gameObj.width
        gameObj.bottom = gameObj.top + gameObj.height

        gameObj.width = width
        gameObj.height = height

        gameObj.image = image

        gameObj.id = newID()

        if (!game.objects[type]) game.objects[type] = {}
        game.objects[type][gameObj.id] = gameObj
    }
}

GameObject.prototype.draw = function() {

    const gameObject = this

    game.cm.drawImage(gameObject.image, gameObject.left, gameObject.top, gameObject.width, gameObject.height)
}

GameObject.prototype.delete = function() {

    const gameObject = this

    delete game.objects[gameObject.type][gameObject.id]
}

GameObject.prototype.rotate = function() {

    const gameObject = this

    // Store the current context state (i.e. rotation, translation etc..)

    game.cm.save()

    // Set the origin to the center of the image

    game.cm.translate(gameObject.left + gameObject.width / 2, gameObject.top + gameObject.height / 2)

    // Rotate the canvas around the origin

    game.cm.rotate(gameObject.angle + Math.PI / 2)

    // Draw image using gameObject's properties

    game.cm.drawImage(gameObject.image, gameObject.width / 2 * -1, gameObject.height / 2 * -1, gameObject.width, gameObject.height)

    // Restore canvas state as saved from above

    game.cm.restore()
}