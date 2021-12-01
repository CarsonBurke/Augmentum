// How often to update sprites (don't set to faster than tickSpeed)

const FPS = 60

// How often to run the game

const tickSpeed = 100

//

globalThis.game = undefined

const gameWidth = 500
const gameHeight = 500

let ID = 0

// structureTypes

const structureTypes = {
    extractor: {
        displayName: 'Extractor',
        description: 'Extracts oil from the ground',
        image: '',
        produces: {
            oil: 2,
        }
    },
    mine: {
        displayName: 'Mine',
        description: 'Mines coal and iron from the ground',
        image: '',
        produces: {
            oil: 2,
        }
    },
    apartment: {
        produces: {
            money: 2,
        }
    },
    farm: {
        produces: {
            food: 6,
        }
    },
    well: {
        produces: {
            water: 2,
        }  
    },
    furnace: {
        consumes: {
            coal: 1,
        },
        produces: {
            coke: 1,
        }
    },
    oilRefinery: {
        consumes: {
            water: 2,
            oil: 2,
        },
        produces: {
            gasoline: 6,
        }
    },
    thermalCracker: {
        consumes: {
            water: 2,
            oil: 2,
        },
        produces: {
            coke: 3,
        }
    }
}

// resources

const resources = [
    'oil',
    'coal',
    'coke',
    'iron',
    'steel',
    'gears',
    'components',
    'gasoline',
    'food',
    'water',
    'money',
]