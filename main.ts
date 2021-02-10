let temps = 0 
basic.forever(function () {
basic.showNumber(temps)
temps+=1
basic.forever(function () {
if (temps ==4 ) {
basic.showLeds(`
# . # . #
. # # # .
# # # # #
. # # # .
# . # . #
`)
} else if (temps==6) {
basic.showIcon(IconNames.House)
} else if (temps==9) {
basic.showString("FIN")
} else {

}
})