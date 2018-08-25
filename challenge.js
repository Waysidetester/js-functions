const printDom = (stringToPrint, divID) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML += `${stringToPrint}`;
};

let bandNumber = 1;

const takeNumber = (bandName) => {
    let bandOutput = `<h3>${bandNumber}: ${bandName}</h3>`;
    bandNumber ++;
    printDom(bandOutput,'band');
}

takeNumber('Galactic Scum');
console.log(bandNumber);
takeNumber('Underdogs');
console.log(bandNumber);
takeNumber('Metallica');
console.log(bandNumber);
