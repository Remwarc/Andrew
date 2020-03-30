const readline = require("readline");

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

// var name = "<INSERT NAME HERE>";

// rl.question('What\'s you\'re name?\n> ', function(answer) {
//     name = answer;
//     console.log('Nice to meet you ' + name + '!')
//     rl.close();
// });\

rl.on('line', (input) => {
    console.log('Received: ' + input);
    console.log('parseInt: ' + parseInt(input));
    // rl.close(); 
    if(input == "quit"){
        console.log("quit")
        rl.close();
    }
})
