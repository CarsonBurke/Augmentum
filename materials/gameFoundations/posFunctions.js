/**
 * Finds the distance between two positions
 * @param otherPos The other pos to find distance from
 * @returns Distance between the positions
 */
Pos.prototype.getDistance = function(otherPos) {

    const pos = this

    // Configure positions

    const x1 = pos.x
    const y1 = pos.y

    const x2 = otherPos.x
    const y2 = otherPos.y

    // Find range using pythagorus and inform it

    const range = Math.sqrt((x1 - x2) * (y1 - y2))
    return range
}

/**
 * Checks is a position is inside another
 * @param otherPos The other pos
 * @returns A boolean of if the positions are inside each other
 */
Pos.prototype.isInside = function(otherPos) {

    const pos = this

    // Check is pos is inside otherPos

    if (pos.bottom >= otherPos.top &&
        pos.top <= otherPos.bottom &&
        pos.right >= otherPos.left &&
        pos.left <= otherPos.right) {

        // Inform true

        return true
    }
}