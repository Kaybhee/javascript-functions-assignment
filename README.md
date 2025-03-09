### Javascript Functions
Ths repository contains my solutions for the javascript functions assignment

### Solutions
* Created an html page with a ```<script>``` tag that links a js file.
* A functions.js that contains;
1. An area calculator
2. string reversal
3. Check even number
4. Check scores

### Preference
It was not required to design an html page that also has the necessary functionality when clicked ON. Basically it has to do with only what the console returns. <br>
The ```index.js``` file is mainly for the console without any structure (html) for the page.

### Aesthetics
A background image is added to give the page a great visibility, and it is styled appopriately.<br>
You can refer to the ```index.js``` file for a less ineractive page using ```node``` to run it.

### How to Run it
* Clone the repo
* Open the ```index.html``` in a browser
* View the result on the console or on the webpage
### Each ```Func``` & it's result
##### Area calculator
* Calculates the area of a rectangle; Enter the length and width.
##### String Reversal
* This function reverses a string; when the function gets called e.g ```reverseStrings('hello')``` returns ```olleh```.
##### Even number Checker
* This function works with a condition, it checks whether a number is divisible by 2, if not, it returns false. The input tag used is wrapped in a ```.length``` so that the input recognises that it has no input, and it originally request for one.

##### Check score
* This function also contains a conditional statement that checks if a number exceeds a value to return an assessment of a student.

### Nuggets
* Use ```node index.js``` to run the standalone js file in the console.
* Emphasis on the ```.length``` during the conditionals in both even checker and score checker, naturally without any input it returns an answer because without an input, it considers the input to be zero. Zero is considered ```Even``` in the Even checker and ```Fail``` in the score checker, so i ensured that without an input it returns a prompt asking for one.
