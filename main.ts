radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        velocityx = value
    }
    if (name == "y") {
        velocityy = value
    }
    if (velocityx > 0) {
        if (velocityy > 0) {
            basic.clearScreen()
            basic.showArrow(ArrowNames.SouthWest)
        } else if (velocityy < 0) {
            basic.clearScreen()
            basic.showArrow(ArrowNames.SouthEast)
        } else {
            basic.clearScreen()
            basic.showArrow(ArrowNames.South)
        }
    } else if (velocityx == 0) {
        if (velocityy > 0) {
            basic.clearScreen()
            basic.showArrow(ArrowNames.West)
        } else if (velocityy < 0) {
            basic.clearScreen()
            basic.showArrow(ArrowNames.East)
        } else {
            basic.clearScreen()
            basic.showIcon(IconNames.Yes)
        }
    } else {
        if (velocityy > 0) {
            basic.clearScreen()
            basic.showArrow(ArrowNames.NorthWest)
        } else if (velocityy < 0) {
            basic.clearScreen()
            basic.showArrow(ArrowNames.NorthEast)
        } else {
            basic.clearScreen()
            basic.showArrow(ArrowNames.North)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
let velocityy = 0
let velocityx = 0
radio.setGroup(1)
basic.forever(function () {
	
})
