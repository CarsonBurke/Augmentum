function runEnv() {

    function updateGame() {


    }

    setInterval(updateSprites, 1)

    function updateSprites() {

        // Store the current transformation matrix

        game.cm.save()

        // Use the identity matrix while clearing the canvas
        
        game.cm.setTransform(1, 0, 0, 1, 0, 0)
        game.cm.clearRect(0, 0, gameWidth, gameHeight)

        // Restore the transform

        game.cm.restore()

        for (const type in game.objects) {

            for (const ID in game.objects[type]) {

                const object = game.objects[type][ID]

                object.draw()
            }
        }
    }
}