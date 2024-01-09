radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        velocityx = value
    }
    if (name == "y") {
        velocityy = value
    }
    if (velocityx > 0) {
        if (velocityy > 0) {
            basic.showArrow(ArrowNames.NorthEast)
        } else if (velocityy < 0) {
            basic.showArrow(ArrowNames.NorthWest)
        } else {
            basic.showArrow(ArrowNames.North)
        }
    } else if (velocityx == 0) {
        if (velocityy > 0) {
            basic.showArrow(ArrowNames.East)
        } else if (velocityy < 0) {
            basic.showArrow(ArrowNames.West)
        } else {
            basic.showIcon(IconNames.Yes)
        }
    } else {
        if (velocityy > 0) {
            basic.showArrow(ArrowNames.SouthEast)
        } else if (velocityy < 0) {
            basic.showArrow(ArrowNames.SouthWest)
        } else {
            basic.showArrow(ArrowNames.South)
        }
    }
})
let velocityy = 0
let velocityx = 0
radio.setGroup(1)
basic.forever(function () {
	
})
