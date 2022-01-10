class Apartment extends Structure {
    constructor(type, left, top, width, height, image, owner) {

        super(type, left, top, width, height, image, owner)

        const structure = this

        structure.structureType = 'apartment'
    }
}