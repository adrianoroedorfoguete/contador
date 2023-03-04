input.onButtonPressed(Button.A, function () {
    Count += 1
    if (Count >= 99) {
        Count = 0
    }
    basic.showNumber(Count)
})
input.onButtonPressed(Button.AB, function () {
    Count = 0
    basic.showNumber(Count)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Count)
    Count += -1
    if (Count <= -1) {
        Count = 0
    }
})
let Count = 0
basic.showNumber(0)
Count = 0
