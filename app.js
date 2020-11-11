let largestNumber = parseInt(prompt('Enter the number'));
    while(!largestNumber) {
        largestNumber = parseInt(prompt('Plese enter correct number'));
    }
const randomNumber = Math.floor(Math.random() * 10) + 1;
 let guess = parseInt(prompt('Try to guess the secret number')),
     counter = 1;

while (parseInt(guess) !== randomNumber) {
    if (guess === 'q') break;
    counter++;
    if (guess > randomNumber) {
        guess = prompt('Too large, try again:');
    } else {
        guess = prompt('Not large enough, try again');
    }
}
if (guess === 'q') {
    console.log('Quitting game');
} else {
    console.log(`Congrats G, you are real, number of attempts ${counter}`);
}