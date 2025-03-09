// Rectangle area calculator
function calculateArea() {
    const length = document.getElementById('length').value;
    const width = document.getElementById('width').value;

    if (length && width) {
        const area = length * width;
        document.getElementById('result').innerText = `Area: ${area}`;
    } else {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
    }
}

// String reversal

function reverseString(){
    const str = document.getElementById('strings').value
    if (str){
        const revString = str.split('').reverse().join('')
    document.getElementById('stringReversal').innerText = revString
} else {
    document.getElementById('stringReversal').innerText = "Enter a text"
}
}

// Even Number Checker
function isEven(){
    const Num = document.getElementById('eveNum').value
    if (Num.length != 0){ //conditional statement for no input
        if (Num % 2 == 0){
        options = "true"
        document.getElementById('even').innerText = `${options}! It's an even number`
    } else if(Num % 2 !== 0){
        options = "false"
        document.getElementById('even').innerText = `${options}! This is not an even number.`
    }
} else{
    document.getElementById('even').innerText = "I am yet to get an input"
}
}

// Score Categorizer
function scoreCategory(){
    const numbers = document.getElementById('score').value
    if (numbers.length != 0){
        if (numbers >= 90){
        return document.getElementById('studentScores').innerText = `An Excellent performance`
    } else if (numbers >= 80){
        return document.getElementById('studentScores').innerText = `A Very good grade`
    } else if(numbers >= 70){
        return document.getElementById('studentScores').innerText = `It's a Pass, you tried!`
    } else {
        return document.getElementById('studentScores').innerText = `You Failed, try again`
    } 
    } else {
        document.getElementById('studentScores').innerText = `I am yet to get an input`
    }
}