class Player {
    constructor(type) {

        const player = this
        
        player.type = type
        game.players[player.type] = player

        player.resources = {}

        for (const resourceName of resources) {
            
            player.resources[resourceName] = 0
        }

        player.resources.money = 10000
    }
}

Player.prototype.purchase = function(costObj) {

    const player = this

    for (const resourcType in costObj) {

        if (player.resources[resourcType] < costObj) return false
    }

    return true
}

Player.prototype.placeStructure = function(event, playerType) {
    
    const player = game.players[playerType]
    
    const type = game.selectedStructureType
    
    if (!player.purchase(type.cost)) return false
    
    const width = structureTypes[type].width
    const height = structureTypes[type].height

    let left = event.clientX - game.canvas.getBoundingClientRect().left - width / 2

    left = Math.max(left, 0)
    left = Math.min(left, game.canvas.width - width)

    let top = event.clientY - game.canvas.getBoundingClientRect().top - height / 2

    top = Math.max(top, 0)
    top = Math.min(top, game.canvas.height - height)
    
    const image = structureTypes[type].image
    
    new Structure(type, left, top, 16, 21, image, playerType)
}