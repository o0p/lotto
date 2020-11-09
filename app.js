let maxNum = parseInt(prompt('enter max number'));
while (!maxNum) {
    maxNum = parseInt(prompt('enter a valid number'));
}

const targetNum = Math.floor(Math.random() * maxNum) + 1;

let guess = parseInt(prompt('enter first guess'));
let attempts = 1;
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt('Too High! Try again:');
    } else {
        guess = prompt('Too Low! Try again:');
    }
}
if(guess === 'q') {
    console.log(`Quitting after ${attempts} attempts`)
} else {
    console.log(`You're winner! But it took you ${attempts} attempts`)
}