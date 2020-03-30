
var list = [0,"hello",false]
console.log(list)
list.push(42)
console.log(list)

console.log(list[5])
for (var i = 0; i < list.length; i += 1){
    console.log(list [i])
}


for (var x of list){
    console.log(x)
}