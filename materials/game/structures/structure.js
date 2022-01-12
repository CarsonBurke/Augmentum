class Structure extends GameObject {
    constructor(type, left, top, width, height, image, ownerType) {

        super(type, left, top, width, height, image)

        const structure = this
        
        structure.ownerType = ownerType
    }
}

Structure.prototype.generateIncome = function() {

    const structure = this

    // Get info about the structure based on its structureType

    const structureInfo = structureTypes[structure.type]
    
    // Stop if the structure doesn't produce anything

    if (!structureInfo.produces) return

    // Loop through resources in the structure's income

    for (const resourceName in structureInfo.produces) {
        
        // Add the resource amount to the player's resources
            console.log(game.players[structure.ownerType].resources[resourceName])
        game.players[structure.ownerType].resources[resourceName] += structureInfo.produces[resourceName]
    }
}