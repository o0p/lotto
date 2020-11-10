let topNum = parseInt(prompt('Enter the largest possible number'));
while(!topNum) {
    topNum = parseInt(prompt('Please enter a valid number'));
}
const numRandom = Math.floor(Math.random() * topNum) + 1;
let guess = parseInt(prompt('What is the secret number?')),
    count = 1;
while (parseInt(guess) !== numRandom) {
    if (guess === 'q') break;
    count++;
    if (guess > numRandom) {
        guess = prompt('Too large, try again:');
    } else {
        guess = prompt('Too small, try again');
    }
}