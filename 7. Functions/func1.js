// Function ==> reusability

console.log("line 3")

function Greeting(){
    console.log("Hello, World!") // function scope
}
Greeting()  // calling the function 

// JS => top to bottom & left to right
//---------------------------------------------------------------

for(let i = 0; i < 3;i++){
    Greeting()
}
//--------------------------------------------------------------
function solve(){
    let a = 10
    let b = 20
    console.log(a*b)
    console.log(a+b)
}
solve()

//--------------------------------------------------------------
let likecount = 1
let arr = []
function counter(){
    // let m = likecount++
    arr.push(likecount++)
}
counter()
console.log(arr)
counter()
console.log(arr)
//---------------------------------------------------------------
let likecounts = 1
function counters(){
    console.log(likecounts++)   // Print current value then increment 
}
counters()
counters()

//-----------------------------------------------------------------

function add(a, b){        // parameters    : variables
    console.log(a * b)
}
add(111, 444)              // ==> arguments     : values
add(1, 43) 
//---------------------------------------------------------------
function solution(c,d,  flag){
    if(flag){
        console.log(c + d)
    }else{
        console.log('flag is false')
    }
    (flag === true)
}  
solution(12,44,false)   // flag is false
solution(12,44,true)    // 56
//----------------------------------------------------------------

function countLength(N){
    console.log(N.length)
}
let testCases = ["str","hello", "tusharChauhan"]
// let testCases = [1,2,3,4,5,6,7]
for(let i = 0; i < testCases.length;i++){
    countLength(testCases[i])
}
//------------------------------------------------------------------
function solveEquation(a, b, c) {
    console.log((a + b) * c);
}
// Example usage
// let a = 2;
// let b = 3;
// let c = 4;
solveEquation(2, 3, 4); // Output: 20
//-------------------------------------------------------------------

function greet(str){
    console.log("Good" + " " +  str )
}
// greet("night")
// greet("day")
//------------------------------------------------------------------

function greets(N, user){
    if(N >= 1 && N <= 24){
        if(N >= 6 && N<= 12){
            console.log("Good Morning" +  user )
        }else if(N>= 12 && N<= 16){
            console.log("Good Afternoon" +  user )
        }
        else if(N>= 16 && N<= 20){
            console.log("Good Evening" +  user )
        }
        else{
            console.log("Good Night" +  user )
        }
    }
  
}

greets(23 , " Tushar")
//------------------------
function greet(N, user){
    if(N >= 1 && N <= 24){
        if(N >= 6 && N<= 12){
            return("Good Morning" +  user )
        }else if(N>= 12 && N<= 16){
            return("Good Afternoon" +  user )
        }
        else if(N>= 16 && N<= 20){
            return("Good Evening" +  user )
        }
        else{
            return("Good Night" +  user )
        }
    }
  
}

console.log(greet(9 , " Tushar"))


//---------------------------------------------------------------------
// Return vs Console 
function sum(a,b){
    console.log(a + b)
}
let sumVariable = sum
console.log(sumVariable(2,4))   // Output 6, undefined
//---------------------------
function solve(a,b){
    return a + b
}
let answer = solve
console.log(answer(2,4))   // Output 6

// Example -2 
function subtract(a,b){
    console.log(a - b)
}
console.log(subtract(6,4))      // Output 6, undefined
subtract(6,4)     // Output 6
//-------------------------

function subtract2(a,b){
    console.log("hello there")
    return a - b        // also gonna act as a break for function 
}
console.log(subtract2(6,4))      // Output 2

















