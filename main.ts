input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    status = 1
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    status = 0
})
let status = 0
status = 0
basic.forever(function () {
    if (status == 1) {
        for (let x = 0; x <= 5; x++) {
            for (let y = 0; y <= 4; y++) {
                led.plot(y, x)
                basic.pause(100)
                led.unplot(y, x)
            }
        }
    }
})
