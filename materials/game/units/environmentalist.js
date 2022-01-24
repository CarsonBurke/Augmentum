class Environmentalist extends GameObject {
    constructor(left, top) {

        const width = 40
        const height = 54

        super('environmentalist', left, top, width, height, document.getElementById('environmentalist'))

        const environmentalist = this

        environmentalist.health = 10
    }
}