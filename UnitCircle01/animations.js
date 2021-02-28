var target = document.getElementById("target")
var link = document.getElementById("link")
var bowAndArrow = document.getElementById("bowAndArrow")
var screenWidth = screen.width
var screenHeight = screen.height - (window.outerHeight - window.innerHeight)

const targetLength = screenHeight * 0.6
const arrowLength = screenHeight * 0.25
const ialPos = (screenWidth * 0.145)
const iatPos = (screenHeight * 0.575)

var falPos = getTargetPositionX(0)
var fatPos = getTargetPositionY(0)
var calPos = ialPos
var catPos = iatPos

var alroc = Math.abs((falPos - calPos) / 200)
var atroc = Math.abs((fatPos - catPos) / 200)

function updateFinalPosition(degree) {
    falPos = getTargetPositionX(degree)
    fatPos = getTargetPositionY(degree)
    var dx = (falPos - calPos)
    var dy = (fatPos - catPos)
    alroc = Math.abs(dx / 200)
    atroc = Math.abs(dy / 200)
}

function getTargetPositionX(degree) {
    var position = 0
    position += screenWidth * 0.5 - arrowLength * 0.8  
    position += (targetLength * 0.5) * Math.cos(degree * Math.PI / 180)
    return position
}

function getTargetPositionY(degree) {
    var position = 0
    position += screenHeight * 0.5  - arrowLength * 0.20
    position -= (targetLength * 0.5) * Math.sin(degree * Math.PI / 180)
    return position
}

// Shortcut functions
function setX(object, x) {
    object.style.left = x + "px"
}

function setY(object, y) {
    object.style.top = y + "px"
}

function setWidth(object, width) {
    object.style.width = width + "px"
}

function setHeight(object, height) {
    object.style.height = height + "px"
}

function setSize(object, width, height) {
    setWidth(object, width)
    setHeight(object, height)
}

function setPos(object, x, y) {
    setX(object, x)
    setY(object, y)
}

// Format target bounds
setPos(target, ((screenWidth - targetLength) * 0.5), (screenHeight * 0.2))  
setSize(target, targetLength, targetLength)

// Format link boudns
setPos(link, (screenWidth * 0.1), (screenHeight * 0.5))  
setSize(link, (screenWidth * 0.175), (screenHeight * 0.5))
link.style.zIndex = "2"

// Format bow and arrow position
setPos(bowAndArrow, (screenWidth * 0.145), (screenHeight * 0.575)) 
setSize(bowAndArrow, arrowLength, arrowLength)

// Reset arrow location
function resetArrowPosition() {
    falPos = getTargetPositionX(0)
    fatPos = getTargetPositionY(0)
    calPos = ialPos
    catPos = iatPos
    setPos(arrow, ialPos, iatPos)
    setSize(arrow, arrowLength, arrowLength)
}

function translateArrowY() {
    if (Math.abs(catPos -  fatPos) > screenHeight * 0.005) {
        if (catPos > fatPos) {
            catPos -= atroc
        } else {
            catPos += atroc
        }
        arrow.style.top = catPos + "px"
        setTimeout(() => {
            translateArrowY()
        }, 5)
    }
}

function translateArrowX() {
    if (Math.abs(calPos - falPos) > screenHeight * 0.005) {
        if (calPos < falPos) {
            calPos += alroc
        } else {
            calPos -= alroc
        }
        arrow.style.left = calPos + "px"
        setTimeout(() => {
            translateArrowX()
        }, 5)
    }
}

resetArrowPosition()
// translateArrow()





