let ceilingNum = parseInt(prompt('Select the largest number to guess'));
    while (!ceilingNum) {
        ceilingNum = parseInt(prompt('This is not a number. Please enter a number.'))
    }
const randomNum = Math.floor(Math.random() * ceilingNum) + 1;
    console.log(randomNum);
let numberOfnumImputs = 1;
let numImput = parseInt(prompt('Guess the secertt number'));

while (parseInt(numImput) !== randomNum) {
    if (numImput === 'q') break;
    numberOfnumImputs++;
    if (numImput > randomNum) {
        numImput = prompt('Too high, try again:')
    } else {
        numImput = prompt('Too low, try again:')
    }
}
console.log(`Success, number of attempts ${numberOfnumImputs}`)