basic.forever(function () {
    pins.digitalReadPin(DigitalPin.P8)
    if (pins.digitalReadPin(DigitalPin.P8) > 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})

//This is a very basic program that takes a reading of pin p8 and then displays the LEDs when it detects a 1 from the input.
