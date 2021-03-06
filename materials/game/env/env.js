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
        width: 20,
        height: 20,
        health: 10,
        produces: {
            oil: 2,
        },
        cost: {
            money: 1000,
        }
    },
/*     mine: {
        displayName: 'Mine',
        description: 'Mines coal and iron from the ground',
        width: 20,
        height: 20,
        health: 10,
        produces: {
            oil: 2,
        },
        cost: {
            money: 1000,
        }
    }, */
    apartment: {
        displayName: 'Apartment',
        description: 'Provides housing for workers',
        width: 16,
        height: 21,
        health: 10,
        housingCapacity: 10,
        produces: {
            money: 5,
        },
        cost: {
            money: 1000,
        }
    },
    farm: {
        displayName: 'Mine',
        description: 'Mines coal and iron from the ground',
        width: 20,
        height: 20,
        health: 10,
        produces: {
            food: 6,
        },
        cost: {
            money: 1000,
        }
    },
/*     well: {
        displayName: 'Mine',
        description: 'Mines coal and iron from the ground',
        width: 20,
        height: 20,
        health: 10,
        produces: {
            water: 2,
        },
        cost: {
            money: 1000,
        }
    },
    furnace: {
        displayName: 'Mine',
        description: 'Mines coal and iron from the ground',
        width: 20,
        height: 20,
        health: 10,
        consumes: {
            coal: 1,
        },
        produces: {
            coke: 1,
        },
        cost: {
            money: 1000,
        }
    },
    oilRefinery: {
        description: 'Mines coal and iron from the ground',
        width: 20,
        height: 20,
        health: 10,
        consumes: {
            water: 2,
            oil: 2,
        },
        produces: {
            gasoline: 6,
        },
        cost: {
            money: 1000,
        }
    },
    thermalCracker: {
        description: 'Mines coal and iron from the ground',
        width: 20,
        height: 20,
        health: 10,
        consumes: {
            water: 2,
            oil: 2,
        },
        produces: {
            coke: 3,
        },
        cost: {
            money: 1000,
        }
    },
    munitionsFactory: {
        description: 'Mines coal and iron from the ground',
        width: 20,
        height: 20,
        health: 10,
        consumes: {
            steel: 2,
        },
        produces: {
            ammunition: 3,
        },
        cost: {
            money: 1000,
        }
    }, */
    autoCannon: {
        description: 'Mines coal and iron from the ground',
        width: 20,
        height: 20,
        health: 40,
        range: 160,
        consumes: {
            ammunition: 1,
        },
        cost: {
            money: 5000,
        }
    },
}

// Units

const unitTypes = {
    environmentalist: {
        width: 20,
        height: 27,
    }
}

// resources

const resources = [
    'money',
    'food',
/*     'water', */
    'oil',
    'coal',
/*     'iron',
    'gasoline', */
    'coke',
/*     'steel',
    'components',
    'ammunition', */
]
