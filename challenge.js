const printDom = (stringToPrint, divID) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML += `<h2>${stringToPrint}</h2>`;
};

let bandNumber = 1;

const takeNumber = (bandName) => {
    let bandOutput = `${bandNumber}: ${bandName}`;
    bandNumber ++;
    printDom(bandOutput,'band');
    return bandOutput;
}

takeNumber('Galactic Scum');
takeNumber('Underdogs');