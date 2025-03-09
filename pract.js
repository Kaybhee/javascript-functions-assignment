let x = "JavaScript is fun"
// Printing substring
console.log(x.substring(4,10))

// Changing case
let str = "hello WORLD"
lowerStr = str.substring(6, 11)
upperStr = str.substring(0, 5)
x = lowerStr.toLowerCase()
y = upperStr.toUpperCase()
console.log(y+ " " + x)

// Finding Characters
let data = "Programming"
indexData = data.indexOf('r')
console.log(indexData)

// Checking Inclusion
let webDev = "Web Development"
if (webDev.substring(0,3) == "Web"){
    console.log("true")
} else{
    console.log("false")
}

// String Length
let strLength = "Coding is Cool"
lenString = strLength.length
console.log(lenString)

//Assessment 2
// Replacing substrings
let str2 = "I like apples and apples"
console.log(str2.replace("apples", "oranges"))

// Splitting strings
let str3 = "apple, banana, orange"
console.log(str3.split(","))

// Trimming whitespace
let str4 = " Extra Spaces "
console.log(str4.trim())

// Concatenation
let strConcat = "Front"
let strConcat2 = "end"
console.log(strConcat.concat(strConcat2))

// Repeating Strings
let strRepeat = "ha"
console.log(strRepeat.repeat(3))