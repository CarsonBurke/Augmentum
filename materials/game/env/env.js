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
        width: 20,
        height: 20,
        produces: {
            oil: 2,
        }
    },
    mine: {
        displayName: 'Mine',
        description: 'Mines coal and iron from the ground',
        image: '',
        width: 20,
        height: 20,
        produces: {
            oil: 2,
        }
    },
    apartment: {
        displayName: 'Apartment',
        description: 'Provides housing for workers',
        image: document.getElementById("apartment"),
        transparentImage: document.getElementById('transparentApartment'),
        width: 16,
        height: 21,
        housingCapacity: 10,
    },
    farm: {
        displayName: 'Mine',
        description: 'Mines coal and iron from the ground',
        image: '',
        width: 20,
        height: 20,
        produces: {
            food: 6,
        }
    },
    well: {
        displayName: 'Mine',
        description: 'Mines coal and iron from the ground',
        image: '',
        width: 20,
        height: 20,
        produces: {
            water: 2,
        }  
    },
    furnace: {
        displayName: 'Mine',
        description: 'Mines coal and iron from the ground',
        image: '',
        width: 20,
        height: 20,
        consumes: {
            coal: 1,
        },
        produces: {
            coke: 1,
        }
    },
    oilRefinery: {
        displayName: 'Mine',
        description: 'Mines coal and iron from the ground',
        image: '',
        width: 20,
        height: 20,
        consumes: {
            water: 2,
            oil: 2,
        },
        produces: {
            gasoline: 6,
        }
    },
    thermalCracker: {
        displayName: 'Mine',
        description: 'Mines coal and iron from the ground',
        image: '',
        width: 20,
        height: 20,
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