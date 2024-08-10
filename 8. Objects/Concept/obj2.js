// console.log(typeof "hello")             //string
// console.log(typeof {a :1, b: 2})        // object
// console.log(typeof [a = "sss", b=3])


let obj = {
    mobileName: "iphone",
    specs: {
        ram: 16,
        storage: 512,
        color: ["gold", "silver"]
    }
};
// Acccess value and keys
// console.log(obj); // Logs the entire obj object
// console.log(obj.mobileName); // Logs "iphone"
// console.log(obj.specs.color[1]); // Logs "silver"
// console.log(obj["specs"]["color"][0]); // Logs "gold"

//-------------------------------------------------------------------
// Update onject 
obj["specs"]["color"][1] = "teal"
obj.specs.color[0]  = "white"


//-------------------------------------------------------------
// Delete node 
delete obj.mobileName
delete obj.specs.color[1]
// console.log(obj);


//-----------------------------------------------------------

// undefined and null

// let a ; // declaration
// a = 10 // assignment 
// a = 15 // reassigning 

//Undefined
let a ;
console.log(a)

// Null
let obj1 = {
    id : null
}
console.log(obj1)



let obj2 = {
    a : 1,
    b : 2,
    c : 3
}
for(let key in obj2){
    console.log(key, obj2[key])
}



