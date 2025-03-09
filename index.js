// Rectangle area calculator
function calculateArea(length, width){
    return (length * width)
   }
   
   console.log(calculateArea(5, 10))
   
   // String reverser
   function reverseString(str){
       return str.split('').reverse().join('')
   }
   console.log(reverseString("hello"))
   
   
   // Even number checker
   function isEven(num){
       if (num % 2 == 0){
           return true
       } else {
           return false
       }
   }
   console.log(isEven(50))
   
   // Score Categorizer
   function scoreCategory(number){
       if (number >= 90){
           return "Excellent"
       } else if (number >= 80){
           return "Very Good"
       } else if(number >= 70){
           return "Pass"
       } else {
           return "Fail"
       }
   }
   console.log(scoreCategory(Number(prompt(`Enter your score: `))))   // Note that the prompt() function only works in the browser console. In the node.js environment it does not recognise it at all.