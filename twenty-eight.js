led.enable(true)
pins.analogWritePin(AnalogPin.P8, 0)
pins.analogWritePin(AnalogPin.P12, 0)
pins.analogWritePin(AnalogPin.P16, 0)
basic.forever(() => {
    basic.showAnimation(`
# . . . . # # . . . # # # . .
. . . . . # # . . . # # # . .
. . . . . . . . . . # # # . .
. . . . . . . . . . . . . . .
. . . . . . . . . . . . . . .
`, 25)
    pins.analogWritePin(AnalogPin.P16, 0)
    pins.analogWritePin(AnalogPin.P12, 1023)

    basic.showAnimation(`
# # # # . # # # # # . # # # #
# # # # . # # # # # # # # # #
# # # # . # # # # # # # # # #
# # # # . # # # # # # # # # #
. . . . . # # # # # # # # # #
`, 25)

    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P8, 1023)

    basic.showAnimation(`
. . # # # . . . # # . . . . # . . . . .
. . # # # . . . # # . . . . # . . . . .
# # # # # . . . # # . . . . # . . . . .
# # # # # # # # # # . . . . # . . . . .
# # # # # # # # # # # # # # # . . . . .
`, 25)

    pins.analogWritePin(AnalogPin.P8, 0)
    pins.analogWritePin(AnalogPin.P16, 1023)

})
//I hardcoded the animation along with the LED being attached to the specific part of the animation.
