input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    for (let x = 0; x <= 5; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(y, x)
            basic.pause(100)
            led.unplot(y, x)
        }
    }
})
basic.forever(function () {
	
})
