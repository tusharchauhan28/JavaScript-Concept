// Function => reuseable piece of code / triggers only when we command it 

function twoNo(){
    console.log(2+2);
}
// twoNo()

// 1) creating and calling the function
// 2) arguments and parameters = >
// parameters are gonna be variables whose values are arguments 


// implicit = > taken care by language itself
// explicit = > taken care by use developers

//-------------------------------------------------------
// var count = 1
// var counts = 10
function onClick(){
    // console.log(count++);
    // return count++
}
// console.log(onClick())
// console.log(onClick())

//--------------------------------------------------------
// Like and Dislike count 

// var count = 1
function like(){
    return count++
}
function dislike(){
    // return --count
    return count-=1
}
// console.log(like())
// console.log(like())
// console.log(like())

// console.log(dislike())
// console.log(dislike())
// console.log(like())
//----------------------------------------------------------

// Likes and dislike 
let count = 0
let counts = 0
function onClick(cond, name){
    if(cond == "inc"){
      ++count
      return `no of like = ${count} , latest like by ${name}`
    }else if(cond == "dec"){
      counts++
       return `no of dislike = ${counts} , latest dislike by ${name}`
    }
}
// console.log(onClick("inc" , "tushar"))
// console.log(onClick("inc" , "Rohit"))
// console.log(onClick("inc" , "Shanu"))
// console.log(onClick("dec" , "Shanu"))
// console.log(onClick("dec" , "Shanu"))
// console.log(onClick("inc" , "Rohit"))
// console.log(onClick("dec" , "Shanu"))

//----------------------------------------------------------------------
// Comments 

let comment = []

function addComment(name, comm){
if(comm !== undefined){
    comment.push(name, comm )
return comment 
}
else {
    return "comment is required"
}
}
console.log(addComment("Tushar" ,"nice work "))
console.log(addComment("Rizvi" ,"Keep it up " ))
console.log(addComment("Rizvi"))
//----------------------------------------------------------------------

// we can call function inside function by passing function as parameter

function parent(){
    console.log("hello i am parents")
    function child(){
        console.log("hello i am child ")
    }
    child()
}
parent()
//--------------------------------------------------------------------

function parents(operation){
    return operation()
}
function printer(){
    return "hello world "
}
console.log(parents(printer))