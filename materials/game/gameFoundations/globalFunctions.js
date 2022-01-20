function newID() {

    ID++
    return ID
}

function findDistance(left1, top1, left2, top2) {

    // Configure positions

    const leftDifference = left1 - left2
    const topDifference = top1 - top2

    // Find range using pythagorus and inform it

    const range = Math.sqrt(Math.pow(leftDifference, 2) + Math.pow(topDifference, 2))
    return range
}