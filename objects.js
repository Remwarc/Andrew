var baseball = {
    weight: 15, color: "green",
}
console.log(baseball.weight)
var pitcher = {
    baseball, team: {
        name: 'jimmys', players: [
            {
                name: 'james'
            }
        ]
    }
}
console.log(pitcher.baseball.color)
var team = pitcher.team 
console.log(team)
var players = team.players 
console.log(players)
console.log(pitcher.team.players)
var greeter = {
    greet: function(name){
        console.log(name)
    }
}
greeter.greet('joesph')
console.log(console)
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log(readline)
console.log(rl)