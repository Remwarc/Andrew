var rockpaperscissors = ["rock", "paper", "scissors"]

const readline =require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function attack (){
    var choice = Math.floor(Math.random() * 3)
    var move = rockpaperscissors[choice]
    return move 
}
// console.log(Math.random())
// var choice = Math.floor(Math.random() * 3)
// // console.log(choice)
// // var move = rockpaperscissors[choice]
// console.log(move)
var player1 = 0
var player2 = 0
var turn = 0
rl.on('line', (input) => {
    if(input == 'rock' || input == 'scissors' || input == "paper" ){
 
        console.log(input)
        turn = turn + 1
        var player1move = input 
        console.log(player1move)
        var player2move = attack()
        console.log(player2move)


        if (player1move == "rock"){
            if (player2move == "paper"){
                player2 = player2 + 1
            }else if (player2move == "scissors"){
                player1 = player1 + 1
            }
        }
        
        
        else if (player1move == "paper") {
            if (player2move == "scissors"){
                player2 = player2 + 1
            }else if (player2move == "rock"){
                player1 = player1 + 1
            }
        }
        else if (player1move == "scissors") {
            if (player2move == "paper"){
                player1 = player1 + 1
            }else if (player2move == "rock"){
                player2 = player2 + 1 
            }
            
        }
        console.log(player1)
        console.log(player2)
        
        
        
        
        if(turn >= 3){ 
            if (player1 > player2){
                console.log("player1")
            }else if (player2 > player1){
                console.log("player2")
            }else {
                console.log("tie")
            }
            rl.close();
        }
    } else {
        console.log('invalid')
    }
    

})






