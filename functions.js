function tirunelveli() {
    console.log('mountain')
    console.log('Forest')

}
tirunelveli()
function greet(sir) {
    console.log(`Hi, ${sir}`)
}
greet('Ahil')
function rant(message) {
    console.log(`${message}`.toUpperCase())
}
rant('hey')
function repeat(txt, noOfTimes) {
    for (let i = 1; i <= noOfTimes; i++) {

        console.log(`${txt}`)
    }
}

function lastElement(arr) {
    if (arr.length - 1 === -1) {
        return null
    } else {
        return arr[arr.length - 1];
    }
}
function capitalize(str) {
    let result = str[0].toUpperCase() + str.substring(1)
    return result;
}

function sumArray(numArr) {
    let result = 0;
    for (let i = 0; i < numArr.length; i++) {
        result += numArr[i];
    }
    return result;
}

const Days = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
}

function returnDay(num) {

    if (num > 7 || num < 1) {
        return null;
    } else {
        let specificDay = Days[`${num}`]
        return specificDay;
    }
}

function numbers() {
    const num = [1, 2, 0, 6, 8]
    function ascending() {
        for (let i of num) {

            console.log(`${i}`)
        }
    }
    ascending()

}
const add = function (x, y) {
    return x + y;
}

function Mysteryfunc() {
    const rand = Math.random()
    if (rand > 0.5) {

        return function () {
            console.log("Hey! Nice pick, I am a good one!")
        }
    } else {

        return function () {

            console.log("Oops!Came into a wrong one!")
        }
    }

}