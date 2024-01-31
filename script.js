// To solve this exercise:
// Step 1: Create a javascript file. 
// Step 2: Create an html file. 
// Step 3: Link the javascript file to the html file.
// Step 4: In the javascript file, declare a variable (using let, const, or var) for each number of the combination.
// Step 5: In each variable include an arithmetic operator (+, -, *, /, or %) that generates the numbers for the lock combination.
// Step 6: Include an alert popup in the javascript file that displays the combination correctly.

// Here I declared a variable called "vaultStr" with the string we want to be displayed in the alert box. 
let vaultStr = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"

// Here are the three numbers for the combination.
let num1 = 5 + 5;
let num2 = 4 * 10;
let num3 = 117 / 3;

// I logged this in the console just I could see if the string was displaying how it should.
console.log(`${vaultStr} ${num1} - ${num2} - ${num3}`); 

// I chose to use a template literal to display the string using the variables I declared.
alert(`${vaultStr} ${num1} - ${num2} - ${num3}`)
