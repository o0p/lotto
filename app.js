let numRange = parseInt(prompt('How high?'));
const randomizer = Math.floor(Math.random() * numRange) + 1;
while (!numRange){
    numRange = parseInt(prompt('Error'));
}
let = guess    = parseInt(prompt('Wassup homie?'));

console.log(randomizer);



while(parseInt(guess) !== randomizer) {

    if (parseInt(guess) > randomizer) {
    guess = parseInt(prompt('Too damn high dawg!'));
} else {
    guess = parseInt(prompt('Not high enough homie!'));
}


}
console.log('Ok, 2221you won')
