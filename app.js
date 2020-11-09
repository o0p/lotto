let maxNum = parseInt(prompt('enter max number'));
while (!maxNum) {
    maxNum = parseInt(prompt('enter a valid number'));
}

const targetNum = Math.floor(Math.random() * maxNum) + 1;

console.log(targetNum);

let guess = parseInt(prompt('enter first guess'));
while (guess !== targetNum) {
    if (guess > targetNum) {
        guess = parseInt(prompt('Too High! Try again:'));
    } else {
        guess = parseInt(prompt('Too Low! Try again:'));
    }
}
console.log("you're winner!")