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