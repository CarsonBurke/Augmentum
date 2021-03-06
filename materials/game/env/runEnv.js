function runEnv() {

    let humanCount = 7922536581
    let tick = 0

    setInterval(updateGame, 1)

    function updateGame() {

        tick++

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

        if (tick % 300 == 0) {

            const environmentalistSpawnAmount = Math.floor(Math.random() * 1 / 10000000 * Math.pow(tick, 2))

            let newEnvironmentalists = 0
    
            while (newEnvironmentalists < environmentalistSpawnAmount) {

                const spawnLocation = Math.random() * 4

                if (spawnLocation < 1) {

                    const top = 0
                    const left = Math.random() * gameWidth - unitTypes.environmentalist.width

                    new Environmentalist(left, top)
                    newEnvironmentalists++

                    continue
                }
                if (spawnLocation < 2) {

                    const top = Math.random() * gameHeight
                    const left = gameWidth - unitTypes.environmentalist.width

                    new Environmentalist(left, top)
                    newEnvironmentalists++
                    
                    continue
                }
                if (spawnLocation < 3) {

                    const top = gameHeight - unitTypes.environmentalist.height
                    const left = Math.random() * gameWidth

                    new Environmentalist(left, top)
                    newEnvironmentalists++
                    
                    continue
                }
                if (spawnLocation < 4) {

                    const top = Math.random() * gameHeight - unitTypes.environmentalist.height
                    const left = 0

                    new Environmentalist(left, top)
                    newEnvironmentalists++
                    
                    continue
                }
            }
        }

        //

        const environmentalists = []

        for (const ID in game.objects.environmentalist) {

            const environmentalist = game.objects.environmentalist[ID]
    
            environmentalists.push(environmentalist)
            
            const targetAutoCannon = Object.values(game.objects.autoCannon).sort((a, b) => findDistance(environmentalist.top, environmentalist.left, a.top, a.left) - findDistance(environmentalist.top, environmentalist.left, b.top, b.left))[0]
        
            if (!targetAutoCannon) continue

            if (findDistance(targetAutoCannon.top, targetAutoCannon.left, environmentalist.top, environmentalist.left) > 40) {

                if (targetAutoCannon.top > environmentalist.top) environmentalist.top += environmentalist.moveSpeed
                else environmentalist.top -= environmentalist.moveSpeed
    
                if (targetAutoCannon.left > environmentalist.left) environmentalist.left += environmentalist.moveSpeed
                else environmentalist.left -= environmentalist.moveSpeed

                continue
            }

            targetAutoCannon.health -= 0.04
            if (targetAutoCannon.health <= 0) targetAutoCannon.delete()
        }

        for (const ID in game.objects.autoCannon) {

            const autoCannon = game.objects.autoCannon[ID]

            if (!autoCannon.angle) autoCannon.angle = -90 * Math.PI / 180
            
            const targetEnvironmentalist = environmentalists.sort((a, b) => findDistance(autoCannon.top, autoCannon.left, a.top, a.left) - findDistance(autoCannon.top, autoCannon.left, b.top, b.left))[0]

            if (!targetEnvironmentalist) continue

            if (findDistance(targetEnvironmentalist.left, targetEnvironmentalist.top, autoCannon.left, autoCannon.top) > structureTypes.autoCannon.range) continue

            autoCannon.angle = Math.atan2((targetEnvironmentalist.top - autoCannon.top), (targetEnvironmentalist.left - autoCannon.left))
            
            targetEnvironmentalist.health -= 0.03
            
            if (targetEnvironmentalist.health <= 0) {

                targetEnvironmentalist.delete()
                humanCount--
            }
        }

        const humanCountEl = document.getElementById('humanCount')

        humanCountEl.innerText = `Humans: ` + humanCount

        //

        const resourcesParent = document.getElementById('resourcesParent')

        resourcesParent.innerHTML = ``

        for (const resourceName of resources) {
            
            resourcesParent.innerHTML += `
            <div class="resourceChild">
                <img src="materials/images/` + resourceName + `.png" alt="" class="structureIcon">
                <h3 class="resourceTitle">` + resourceName + `</h3>
                <p class="` + resourceName +`Amount">` + game.players.person.resources[resourceName] +`</p>
            </div>
                `
        }
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

                if (object.type == 'autoCannon') object.rotate()
            }
        }
    }
}