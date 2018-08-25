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

const numberAdder = (number) => {
    return number+3;
}

console.log(numberAdder('Number:', 10));
console.log(numberAdder('Number:', 9));
console.log(numberAdder('Number:', 3));