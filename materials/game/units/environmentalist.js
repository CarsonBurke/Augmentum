class Environmentalist extends GameObject {
    constructor(left, top) {

        const width = 20
        const height = 27

        super('environmentalist', left, top, width, height, document.getElementById('environmentalist'))

        const environmentalist = this

        environmentalist.health = 10

        environmentalist.moveSpeed = 1
    }
}