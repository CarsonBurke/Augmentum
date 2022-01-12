function runEnv() {

    setInterval(updateGame, 1000)

    function updateGame() {

        // Stop if the game is paused

        if (game.paused) return

        // Loop through types in game objects

        for (const type in game.objects) {

            // Iterate if the type isn't a structure type
            
            if (!structureTypes[type]) continue

            // Otherwise loop through IDs of the object

            for (const ID in game.objects[type]) {

                // Define the structure using the ID

                const structure = game.objects[type][ID]
                
                // Iterate if there is no owner

                if (!structure.ownerType) continue
                
                // Have the strucutre generate resources

                structure.generateIncome()
            }
        }

        const resourcesParent = document.getElementById('resourcesParent')

        for (const resourceName in game.players.person.resources) {

            resourcesParent.innerHTML = `
                <div class="resourcesChild">
                    <img src=materials/"` + resourceName + `" alt="" class="resourceIcon">
                    <h3 class="resourceTitle">` + resourceName + `</h3>
                    <p class="` + resourceName +`Amount">` + game.players.person.resources[resourceName] +`</p>
                </div>`
        }

        resourcesParent.innerText = game.players.person.resources.money
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