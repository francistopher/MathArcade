var indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

var degrees = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330, 360]
var radians = ["0", "pi/6", "pi/4", "pi/3", "pi/2", "2pi/3", "3pi/4", "5pi/6", "pi", "7pi/6", "5pi/4", "4pi/3", "3pi/2", "5pi/3", "7pi/4", "11pi/6", "2pi"]

var xcoord = ["1", "r3/2", "r2/2", "1/2", "0", "-1/2", "-r2/2", "-r3/2", "-1", "-r3/2", "-r2/2", "-1/2", "0", "1/2", "r2/2", "r3/2", "1"]  
var ycoord = ["0", "1/2", "r2/2", "r3/2", "1", "r3/2", "r2/2", "1/2", "0", "-1/2", "-r2/2", "-r3/2", "-1", "-r3/2", "-r2/2", "-1/2", "0"]

var questions = []
var answers = []

// Find the radian given the degree 0 
// Find the degree given the radian 1
// Find the x given the degree 2 
// Find the y given the degree 3
// Find the x given the radian 4
// Find the y given the radian 5


function getRadiansWithPi(radian) {
    radian = String(radian)
    const index = radian.indexOf("pi")
    var newRadian = radian
    if (index != -1) {
        newRadian = radian.substring(0, index) + "\u03C0" + radian.substring(index + 2)
    }
    return newRadian
}


function generateProblemSet(option) {
    for (var index = 0; index < indexes.length; index++) {
        switch (option) {
            case 0:
                questions.push("What is the radians of " + degrees[indexes[index]] + "\u00B0?")
                answers.push(radians[indexes[index]])
                break
            case 1:
                questions.push("What is the degrees of " + getRadiansWithPi(radians[indexes[index]]) + " radians?")
                answers.push(degrees[indexes[index]])
                break
            case 2:
                questions.push("What is the cos of " + degrees[indexes[index]] + "\u00B0?")
                answers.push(getXOfDegree(degrees[indexes[index]]))
                break
            case 3:
                questions.push("What is the sin of " + degrees[indexes[index]] + "\u00B0?")
                answers.push(getYOfDegree(degrees[indexes[index]]))
                break
            case 4:
                questions.push("What is the cos value of " + getRadiansWithPi(radians[indexes[index]]) + " radians?")
                console.log(getXOfRadian(radians[indexes[index]]), "HELLO")
                answers.push(getXOfRadian(radians[indexes[index]]))
                break
            case 5:
                questions.push("What is the sin value of " + getRadiansWithPi(radians[indexes[index]]) + " radians?")
                answers.push(getYOfRadian(radians[indexes[index]]))  
                break
        }
    }
}




function getRandomIndex(array) {
    return array[Math.floor(Math.random()*array.length)];
}

function shuffle(array) {
    var temp = 0
    var randomIndex = 0

    for (var index = 0; index < array.length; index++) {

        temp = array[index]
        randomIndex = getRandomIndex(array)
        array[index] = array[randomIndex]
        array[randomIndex] = temp

    }
    return array;
}

var indexInQuestion = 0


function getXOfDegree(degree) {
    for (var index = 0; index < degrees.length; index++){
        if (degree == degrees[index]) {
            return (xcoord [index])
        }
    }
    return "Sorry, couldn't find it."
}

function getYOfDegree(degree) {
    for (var index = 0; index < degrees.length; index++){
        if (degree == degrees[index]) {
            return (ycoord [index])
        }
    }
    return "Sorry, couldn't find it."
}

function getXOfRadian(radian) {
    for (var index = 0; index < radians.length; index++){
        if (radian == radians[index]) {
            return (xcoord [index])
        }
    }
    return "Sorry, couldn't find it."
}

function getYOfRadian(radian) {
    for (var index = 0; index < radians.length; index++){
        if (radian == radians[index]) {
            return (ycoord [index])
        }
    }
    return "Sorry, couldn't find it."
}


function whatIsDegreeOf(radian) {
    for (var indexes = 0; indexes < radians.length; indexes++){
        if (radian == radians[indexes]) {
            console.log(radians[indexes])
            return (degrees [indexes])
        }
    }
    return "You are wrong!"
}

function whatIsRadianOf(degree) {
    for (var indexes = 0; indexes < degrees.length; indexes++){
        if (degree == degrees[indexes]) {
            console.log(degrees[indexes])
            return (radians [indexes])
        }
    }
    return "You are wrong."
}
