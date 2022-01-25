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

        if (tick % 100 == 0) {

            const environmentalistSpawnAmount = Math.floor(Math.random() * tick / 1000)

            let newEnvironmentalists = 0
    
            while (newEnvironmentalists < environmentalistSpawnAmount) {
    
                new Environmentalist(Math.random() * gameWidth, Math.random() * gameHeight)
                newEnvironmentalists++
            }
        }

        //

        const environmentalists = []

        for (const ID in game.objects.environmentalist) {

            const environmentalist = game.objects.environmentalist[ID]
    
            environmentalists.push(environmentalist)
            
            const targetAutoCannon = Object.values(game.objects.autoCannon).sort((a, b) => findDistance(environmentalist.left, environmentalist.top, a.left, a.top) - findDistance(environmentalist.left, environmentalist.top, b.left, b.top)).reverse()[0]
        
            if (!targetAutoCannon) continue

            if (targetAutoCannon.top > environmentalist.top) environmentalist.top += environmentalist.moveSpeed
            else environmentalist.top -= environmentalist.moveSpeed

            if (targetAutoCannon.left > environmentalist.left) environmentalist.left += environmentalist.moveSpeed
            else environmentalist.left -= environmentalist.moveSpeed
        }

        for (const ID in game.objects.autoCannon) {

            const autoCannon = game.objects.autoCannon[ID]

            if (!autoCannon.angle) autoCannon.angle = -90 * Math.PI / 180
            
            const targetEnvironmentalist = environmentalists.filter(environmentalist => findDistance(environmentalist.left, environmentalist.top, autoCannon.left, autoCannon.top) < 100)[0]

            if (!targetEnvironmentalist) continue

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