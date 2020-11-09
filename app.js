let maxNum = parseInt(prompt('enter max number'));
while (!maxNum) {
    maxNum = parseInt(prompt('enter a valid number'));
}

const targetNum = Math.floor(Math.random() * maxNum) + 1;

let guess = parseInt(prompt('enter first guess'));
let attempts = 1;
while (guess !== targetNum) {
    attempts++;
    if (guess > targetNum) {
        guess = parseInt(prompt('Too High! Try again:'));
    } else {
        guess = parseInt(prompt('Too Low! Try again:'));
    }
}
console.log(`You're winner! But it took you ${attempts} attempts`)