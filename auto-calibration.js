let HighReading1 = 0
let HighReading2 = 0
let HighReading3 = 0
let HighAverage = 0
let LowReading1 = 0
let LowReading2 = 0
let LowReading3 = 0
let LowAverage = 0
let reading = 0
function CalibrateHigh(HighReading: number) {

    basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    basic.pause(2000)
    basic.clearScreen()

    pins.digitalWritePin(DigitalPin.P8, 1)
    HighReading = pins.analogReadPin(AnalogPin.P2)
    pins.digitalWritePin(DigitalPin.P8, 0)
    return HighReading
    basic.showNumber(HighReading)
    basic.pause(1000)

}
function CalibrateLow(LowReading: number) {

    basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
    basic.pause(2000)
    basic.clearScreen()

    pins.digitalWritePin(DigitalPin.P8, 1)
    LowReading = pins.analogReadPin(AnalogPin.P2)
    pins.digitalWritePin(DigitalPin.P8, 0)
    return LowReading
    basic.showNumber(LowReading)
    basic.pause(1000)


}

function DiscoverAverage(num1: number, num2: number, num3: number) {
    let average = (num1 + num2 + num3) / 3
    return average
}

HighReading1 = CalibrateHigh(HighReading1)
LowReading1 = CalibrateLow(LowReading1)
HighReading2 = CalibrateHigh(HighReading2)
LowReading2 = CalibrateLow(LowReading2)
HighReading3 = CalibrateHigh(HighReading3)
LowReading3 = CalibrateLow(LowReading3)
HighAverage = DiscoverAverage(HighReading1, HighReading2, HighReading3)
LowAverage = DiscoverAverage(LowReading1, LowReading2, LowReading3)

basic.forever(function () {


    pins.digitalWritePin(DigitalPin.P8, 1)
    reading = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P8, 0)

    let LEDreading = pins.map(reading, LowAverage, HighAverage, 4, 0)
    for (let x = 0; x < 5; x++) {
        for (let y = 5; y > LEDreading; y--) {
            led.plot(x, y)

            basic.pause(2000)
            basic.clearScreen()
        }
    }
})
