// x 1. generate a random integer between 0 and 10
// x 2. create a game loop with rl.on
// x 3. check if the users input == the number generated
// x 4. quit the game with true
// x 5. tell the user if the number is right or wrong
const choice = Math.floor(Math.random() * 11)
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.on('line', function(input) {
if (input == choice) {
    console.log('correct')
    rl.close();
} else {
    console.log("wrong")
}
}) 
