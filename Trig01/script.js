var a = 1
var b = 1
var c = 1
const screenHeight = screen.height - (window.outerHeight - window.innerHeight)
const screenWidth = screen.width
function generateSides() {
    a = Math.floor(Math.random() * 9) + 2
    b = Math.floor(Math.random() * 9) + 2
    var temp = 0;
    if (b > a) {
        temp = b
        b = a
        a = temp
    }
    c = Math.pow(a, 2) + Math.pow(b, 2)
    c = "sqr(" + c + ")"
}

generateSides()


function draw() {
    const canvas = document.querySelector('#canvas')
    canvas.style.position = 'absolute'
    canvas.width = screenWidth
    canvas.height = screenHeight

    const ctx = canvas.getContext('2d')

    // draw a red line
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 5

    var aLength = screenHeight * 0.5
    var lineX = (screenWidth - aLength) * 0.5
    var linedX = aLength / a

    ctx.beginPath()
    ctx.moveTo(lineX, screenHeight * 2 / 3)
    ctx.lineTo(lineX + aLength, (screenHeight * 2 / 3))
    ctx.stroke()

    // draw a blue line
    ctx.strokeStyle = 'blue'
    var bLength = linedX * b

    ctx.beginPath()
    ctx.moveTo(lineX + aLength, screenHeight * 2 / 3)
    ctx.lineTo(lineX + aLength, (screenHeight * 2 / 3) - bLength)
    ctx.stroke()

    // draw a green line
    ctx.strokeStyle = 'green'
    ctx.beginPath()
    ctx.moveTo(lineX, screenHeight * 2 / 3)
    ctx.lineTo(lineX + aLength, (screenHeight * 2 / 3) - bLength)
    ctx.stroke()

    // get textfields
    const atf = document.getElementById('a')
    const btf = document.getElementById('b')
    const ctf = document.getElementById('c')

    function setSize(element) {
        atf.style.width = ""
    }




}
draw();
