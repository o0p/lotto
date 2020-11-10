let numRange = parseInt(prompt('How high?')),
    guess    = parseInt(prompt('Wassup homie?'));

const randomizer = Math.floor(Math.random() * numRange) + 1;
console.log(randomizer);


while (!numRange){
    numRange = parseInt(prompt('Error'));
}

while(parseInt(guess) !== randomizer) {
    
    if( guess == NaN){
        console.log('errRRRRRRR');
        console.log(guess);

    }
    if (parseInt(guess) > randomizer) {
    guess = prompt('Too damn high dawg!');
} else {
    guess = prompt('Not hight enough homie!');
}
}