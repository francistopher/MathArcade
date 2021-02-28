const startButton = document.getElementById("startB")
startButton.style.width = (screenHeight * 0.6) + "px"
startButton.style.top = (screenHeight * 0.2) + "px"
startButton.style.borderRadius = (screenHeight * 0.3) + "px"

const header = document.getElementById("header")
header.style.height = (screenHeight * 0.05) + "px"
header.style.width = (screenWidth) + "px"
header.style.fontSize = (screenHeight * 0.03) + "px"


const questionLabel = document.getElementById("question")
setSize(startButton, screenHeight * 0.6, screenHeight * 0.6)
setX(startButton, (screenWidth - (screenHeight * 0.6)) * 0.5)
const answerBox = document.getElementById("answerBox")
var isPlaying = true
var totalCorrect = 0
answerBox.addEventListener("keyup", function(event) {
    event.preventDefault()
    if (event.keyCode == 13) {
        if (isPlaying) {
            console.log(answerBox.value)
            if ((String(answers[indexInQuestion]).localeCompare(answerBox.value)) == 0) {
                questionLabel.innerHTML = "CORRECT! PRESS ENTER IN THE TEXT FIELD TO CONTINUE."
                updateFinalPosition(degrees[indexes[indexInQuestion]])
                setTimeout(()=>{translateArrowX()}, 1)
                setTimeout(()=>{translateArrowY()}, 1)
                totalCorrect += 1
            } else {
                questionLabel.innerHTML = "INCORRECT PRESS ENTER IN THE TEXT FIELD TO CONTINUE."
            }
            answerBox.value = ""
            isPlaying = false
        } else {
            indexInQuestion += 1
            answerBox.value = ""
            resetArrowPosition()
            if (indexInQuestion != 17) {
                questionLabel.innerHTML = questions[indexInQuestion]
                isPlaying = true
            } else {
                questionLabel.innerHTML = "Your score: " + ((totalCorrect / 17).toFixed(2) * 100) + "%"
                answerBox.style.display = "none"
                indexInQuestion = 0
                answers = []
                questions = []
                startButton.style.display = "block"
                isPlaying = false
                totalCorrect = 0
            }
        }
    }
})

function startPlaying(problemType) {
    question.style.opacity = 1
    startButton.style.display = "none"
    shuffle(indexes)
    generateProblemSet(problemType)
    answerBox.style.display = "block"
    questionLabel.innerHTML = questions[indexInQuestion]
    isPlaying = true
}

const fRGDButton = document.getElementById("option1")
fRGDButton.addEventListener("click", function(){
    startPlaying(0)
})

const fDGRButton = document.getElementById("option2")
fDGRButton.addEventListener("click", function() {
    startPlaying(1)
})

const fXGDButton = document.getElementById("option3")
fXGDButton.addEventListener("click", function() {
    question.style.opacity = 1
    startPlaying(2)
})

const fYGDButton = document.getElementById("option4")
fYGDButton.addEventListener("click", function() {
    startPlaying(3)
})

const fXGRButton = document.getElementById("option5")
fXGRButton.addEventListener("click", function() {
    startPlaying(4)
})


const fYGRButton = document.getElementById("option6")
fYGRButton.addEventListener("click", function() {
    startPlaying(5)
})

options = [fRGDButton, fDGRButton, fXGDButton, fYGDButton, fXGRButton, fYGRButton]
for (var i = 0; i < options.length; i++) {
    var option = options[i]
    option.style.fontSize = screenHeight * 0.02 + "px"
    option.style.width = screenHeight * 0.6 + "px"
    option.style.height = screenHeight * 0.1 + "px"
    option.style.left = "0px"
    console.log("Hello")
}




