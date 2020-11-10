let numRange = parseInt(prompt('How high?'));
const numLucky = Math.floor(Math.random() * numRange) + 1;
console.log(numLucky);
while (!numRange){
    numRange = parseInt(prompt('Error'));
}
let = guess    = parseInt(prompt('Wassup homie?'));




while(parseInt(guess) !== numLucky) {

    if (parseInt(guess) > numLucky) {
    guess = parseInt(prompt('Too damn high dawg!'));
} else {
    guess = parseInt(prompt('Not high enough homie!'));
}


}
console.log('Ok, 2221you won')
