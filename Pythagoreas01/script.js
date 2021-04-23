
const screenHeight = screen.height - (window.outerHeight - window.innerHeight)
const screenWidth = screen.width
const question = document.getElementById('question')
var a = 1
var b = 1
var c = 1
var temp = 0
function generateSides() {
    a = Math.floor(Math.random() * 9) + 2
    b = Math.floor(Math.random() * 9) + 2
    if (b > a) {
        temp = b
        b = a
        a = temp
    }
    c = Math.pow(a, 2) + Math.pow(b, 2)
    c = "\u221A" + c
}

const ctx = canvas.getContext('2d')
function setupCanvas() {
    const canvas = document.querySelector('#canvas')
    canvas.style.position = 'absolute'
    canvas.width = screenWidth
    canvas.height = screenHeight
}

//Setup textfields
const atf = document.getElementById('a')
const btf = document.getElementById('b')
const ctf = document.getElementById('c')

function setSize(element) {
    element.style.width = screenHeight * 0.2 + 'px'
    element.style.height = screenHeight * 0.05  + 'px'
}

function setPosition(element, x, y) {
    element.style.left = x + 'px'
    element.style.top = y + 'px' 
}
setSize(atf)
setSize(btf)
setSize(ctf)


generateSides()
setupCanvas()

function draw() {

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
    setPosition(atf, (screenWidth - (screenHeight * 0.2)) * 0.5, screenHeight * 2 / 2.75)
    setPosition(btf, lineX + (aLength * 1.125), (screenHeight * 2 / 3) - (bLength * 0.6))
    setPosition(ctf, lineX + (aLength - (screenHeight * 0.2)) * 0.5, (screenHeight * 2 / 3) - (bLength * 0.8))
    const angle = -1 * (Math.atan(b/a) * 180 / Math.PI) 
    console.log(angle - 135, angle) + 45
    const angleS = String(Math.floor(angle)) + "deg"
    ctf.style.transform = "rotate(" + angleS +")"

    atf.value = a
    btf.value = b
    ctf.value = c

    const side = Math.floor(Math.random() * 3)
    if (side == 0) {
        question.innerHTML = "What is the length of the hypotenuse side?"
        ctf.value = "???"
        atf.disabled = true
        btf.disabled = true
        ctf.disabled = false
    }
    else if (side == 1) {
        question.innerHTML = "What is the length of the adjacent side?"
        atf.value = "???"
        ctf.disabled = true
        btf.disabled = true
        atf.disabled = false
    }
    else {
        question.innerHTML = "What is the length of the opposite side?"
        btf.value = "???"
        btf.disabled = false
        atf.disabled = true
        ctf.disabled = true
    }

}

atf.addEventListener("keyup", function(event) {
    event.preventDefault()
    if (event.keyCode == 13) {

            if(a == atf.value) {
                question.innerHTML = "Correct! :)"   
            } else {
            
                question.innerHTML = "Try Again! :("   
            }
    }})

btf.addEventListener("keyup", function(event) {
    event.preventDefault()
    if (event.keyCode == 13) {
    
            if(b == btf.value) {
                question.innerHTML = "Correct! :)"   
            } else {
            
                question.innerHTML = "Try Again! :("   
            }
    }})

ctf.addEventListener("keyup", function(event) {
    event.preventDefault()
    if (event.keyCode == 13) {
        if (c[0] == "\u221A") {
            if(("r" + c.slice(1)) == ctf.value) {
                question.innerHTML = "Correct! :)"   
            } else {
                
                question.innerHTML = "Try Again! :("   
            }
        } else {
            if(c == ctf.value) {
                question.innerHTML = "Correct! :)"   
            } else {
            
                question.innerHTML = "Try Again! :("   
            }
        }
    }})

draw();

