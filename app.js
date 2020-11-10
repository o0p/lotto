let numRange = parseInt(prompt('How high?'));
let count = 1;

const numLucky = Math.floor(Math.random() * numRange) + 1;
console.log(numLucky);
while (!numRange){
    numRange = parseInt(prompt('Error, enter number'));
    console.log(numLucky);

}
let = guess    = parseInt(prompt('Wassup homie?'));




while(parseInt(guess) !== numLucky) {
    if (guess === "q") {break};
    count++;
    if (parseInt(guess) > numLucky) {
    guess = prompt('Too damn high dawg!');
} else {
    guess = prompt('Not high enough homie!');
}


}
console.log(`Victory! Number of trys: ${count}`)
