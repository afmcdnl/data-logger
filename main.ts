radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        x = value
    } else if (name == "y") {
        y = value
    } else if (name == "z") {
        z = value
    }
})
let z = 0
let y = 0
let x = 0
radio.setGroup(99)
basic.forever(function () {
    serial.writeValue("x", 0)
    serial.writeValue("y", 0)
    serial.writeValue("z", 0)
    basic.showNumber(x)
    basic.showNumber(y)
    basic.showNumber(z)
})
