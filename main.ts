radio.onReceivedString(function (receivedString) {
    radio.setGroup(143)
    radio.sendString(receivedString)
})
basic.forever(function () {
    radio.setGroup(142)
    radio.setGroup(143)
})
