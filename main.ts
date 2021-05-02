input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
input.onButtonPressed(Button.A, function () {
    richtung = 1
})
input.onButtonPressed(Button.AB, function () {
    richtung = 0
})
input.onButtonPressed(Button.B, function () {
    richtung = -1
})
let richtung = 0
basic.showIcon(IconNames.Heart)
let strip = neopixel.create(DigitalPin.P8, 12, NeoPixelMode.RGB)
let range = strip.range(0, 12)
range.showRainbow(1, 256)
basic.forever(function () {
    strip.rotate(richtung)
    strip.show()
    basic.pause(100)
})
