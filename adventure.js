const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var rooms = [
    {
        name: 'artroom' ,description: "lots of computers"
    }
]

var currentroomindex = 0 

var describecurrentroom = function(){
    var currentroom = rooms [currentroomindex]
    console.log(currentroom)
}
describecurrentroom()
// game loop
rl.on('line', function(input){
    if (input == 'quit') {
        rl.close()
    } else {
        describecurrentroom()
    }
    
})

