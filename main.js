const  bananaDiv = document.getElementById('banana');
bananaDiv.innerHTML = 'I\'m a banana';

let counter = 0;
counter += 1;
counter ++;
counter = counter + 1;

console.log('counter: ' + counter);
const greeting = document.getElementById('greeting');
const fName = 'Dylan';
const lName = 'Murray';
greeting.innerHTML = `Hello my name is ${fName} ${lName}`;

// Shorthand Notation

let name = 'Callan';
let age = '1000000000';

let person = {name, age};

console.log('person:', person.name);