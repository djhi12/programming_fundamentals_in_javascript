/*
Writing a Function
*/
function functionName (parameter1, parameter2, parameter3) {
    // statements;
    // return value; 
    const plus = parameter1 + parameter2 + parameter3;
    return plus;
    // console.log(functionName(3, 4, 5)); // no answer
} 

console.log(functionName(3, 4, 5)); // 12
// console.log(plus()); // Uncaught ReferenceError: plus is not defined

/*
The first line of a function is called the header or signature, and it includes
1. the keyword function
2. the function name
3. the parameter list
*/


/*
Example 1 
1. Write the header for a function named drawCircle that takes three parameters:  the x and y values for the 
center of the circle and the radius of the circle, all in pixels.
*/
function drawCircle(centerX, centerY, radius) {
    // Statements;
}

/* 
Example 2 
1. Write a function (header and body) that computes and returns the average of three numbers.
*/
// Computes and return the average of three numbers.
function average(a, b, c) { // Uncaught SyntaxError: Unexpected token 'function'
    let sum = a + b + c;
    let avg = sum / 3;
    return avg;
}
console.log(average()); // NaN
console.log(average(5, 5, 5)); // 5


/* 
Example 3 
1. Write a function that takes two parameters and computes and returns the value of this equation: 
*/
function formula(a, r) {
    let result = a * (1 + r);
    return result;
}
console.log(formula()); // Nan


/*
Calling a Function
1. Calling or invoking a function causes the computer to execute the code in that function.

2. If you write a function, but never write a call to that function, then the computer will never 
execute the code in that function. 

3. To call a function, simply write its name followed by the data, known as arguments, which the 
function will need to perform its task.

4. An argument can be a constant such as 23, a string literal such as 'Idaho', or a variable. 

5.  If you use variables as arguments in a function call, the names of the arguments do not have to match 
the names of the parameters. However, the order of the arguments must match the order of the parameters.
*/

// Template
// functionName(para1, para2, para3);
// console.log(functionName()); // Uncaught ReferenceError: para1 is not defined

/*
Example 4
1. Write the code to call a function that has this header:
*/
function run() {
    // Get three values from the user
    let x = parseInt(document.getElementById("xInputBox").value); // Uncaught TypeError: Cannot read property 'value' of null
    let y = parseInt(document.getElementById("yInputBox").value);
    let radius = parseFloat(document.getElementById("radiusInoutBox").value);
    let calc = x + y + radius;+

    // Call the drawCircle function.
    drawCircle(x, y, radius);
}
console.log(run()); // 
// document.getElementById("result").innerHTML = calc ;

