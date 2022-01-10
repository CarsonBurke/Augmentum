class Structure extends GameObject {
    constructor(type, left, top, width, height, image, owner) {

        super(type, left, top, width, height, image)

        const structure = this

        structure.owner = owner
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

        structure.owner.resources[resourceName] += structureInfo.produces[resourceName]
    }
}