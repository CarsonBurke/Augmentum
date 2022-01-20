class Environmentalist extends GameObject {
    constructor(left, top) {

        const width = 80
        const height = 108

        super('environmentalist', left, top, width, height, document.getElementById('environmentalist'))

        const environmentalist = this

        environmentalist.health = 10
    }
}