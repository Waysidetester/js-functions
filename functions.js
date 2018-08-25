// create nuggetizer

function nuggetizer (animal) {
    return `${animal} stix`;
}

const nuggetizer2 = (animal) => {
    return `${animal} jerkey`;
}

console.log('fish:', nuggetizer('fish'));
console.log('cat:', nuggetizer('cat'));
console.log('bear:', nuggetizer('bear'));

console.log('deer:', nuggetizer2('deer'));

const bearSticks = nuggetizer('bear');

const nomnom = (name,food) => {
    return `${name} devoured ${food}`;
}

console.log(nomnom('Dylan', bearSticks)); // Dylan devours bear stix

//numberAdder must take number and add 3



const numberAdder = (num) => {
    const finalNumber = num + 3;
    printDom(finalNumber, 'numOutput');
};


// resuable function that prints to DOM

const printDom = (stringToPrint, divID) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML += `<p>${stringToPrint}</p>`;
};

numberAdder(22);
numberAdder(2);

printDom("I am hungry", "feelings")