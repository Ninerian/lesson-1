input.onButtonPressed(Button.A, function () {
    schritt = 0
    basic.showNumber(schritt)
})
input.onGesture(Gesture.Shake, function () {
    schritt += 1
    basic.showNumber(schritt)
})
let schritt = 0
schritt = 0
basic.showNumber(schritt)
