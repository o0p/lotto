let ceilingNum = parseInt(prompt('Select the largest number to guess'));
    while (!ceilingNum) {
        ceilingNum = parseInt(prompt('This is not a number. Please enter a number.'))
    }
const randomNum = Math.floor(Math.random() * ceilingNum) + 1;
    console.log(randomNum);
let attemptCounter = 1;
let attempt = parseInt(prompt('Guess the secertt number'));

while (parseInt(attempt) !== randomNum) {
    if (attempt === 'q') break;
    attemptCounter++;
    if (attempt > randomNum) {
        attempt = prompt('Too high, try again:')
    } else {
        attempt = prompt('Too low, try again:')
    }
}
console.log(`Success, number of attempts ${attemptCounter}`)