input.calibrateCompass()
basic.forever(function () {
    basic.clearScreen()
    if (input.compassHeading() >= 337.5 || input.compassHeading() <= 22.5) {
        basic.showArrow(ArrowNames.North)
    } else if (input.compassHeading() >= 22.5 || input.compassHeading() <= 67.5) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (input.compassHeading() >= 67.5 || input.compassHeading() <= 113.5) {
        basic.showArrow(ArrowNames.East)
    } else if (input.compassHeading() >= 113.5 || input.compassHeading() <= 158.5) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (input.compassHeading() >= 158.5 || input.compassHeading() <= 203.5) {
        basic.showArrow(ArrowNames.South)
    } else if (input.compassHeading() >= 203.5 || input.compassHeading() <= 248.5) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (input.compassHeading() >= 248.5 || input.compassHeading() <= 293.5) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (input.compassHeading() >= 293.5 || input.compassHeading() <= 338.5) {
        basic.showArrow(ArrowNames.West)
    } else if (input.compassHeading() >= 293.5 || input.compassHeading() <= 338.5) {
        basic.showArrow(ArrowNames.NorthWest)
    } else {
        basic.clearScreen()
    }
})
