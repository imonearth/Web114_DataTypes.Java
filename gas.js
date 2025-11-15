
let username = prompt("What is your name?");


let entryCount = 0;
let total = 0;
let weeklyGas = parseFloat(prompt("enter your 1st week's gas total"));

function calcGasAvg() {
 
    while (weeklyGas !== -1) {

        total += weeklyGas;

        entryCount++;

        weeklyGas = parseFloat(
            prompt("enter your next week's gas total (-1 when done)")
        );
    }

    
    let averageGas;

    if (entryCount > 0) {
        averageGas = total / entryCount;
    } else {
        averageGas = 0;
    }

    return averageGas;
}

let gas = calcGasAvg();


confirm(
    username + "'s average weekly gas bill is $" + gas.toFixed(2));

if (entryCount === 0) {
    confirm("No gas totals were entered.");
} else if (entryCount === 1) {
    confirm("You entered 1 gas total.");
} else {
    confirm("You entered " + entryCount + " gas totals.");
}