// Array

let arr = ["orange", "grapes", "apple"];

let fruitcolor = ["orange", "green", "red"];

let quantity = [10, 14, 15];

let price = [1000, 500, 1500];

// console.log(arr[0], fruitcolor[0], quantity[0], price[0])

for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i], fruitcolor[i], quantity[i], price[i])
}





//------------------------------------------------------------------

// Multiple value/array in one object
let narr = [
  { name: "tushar", rollNo: 10 },
  { name: " rajput", rollNo: 5 },
];
// console.log(narr)



//--------------------------------------

let obj = {
  // key  - value pairs
  name: "orange",
  color: "orange",
  quantity: 10,
  price: 1000,
};
// console.log(obj);
// console.log(obj.name, obj.color, obj.quantity, obj.price);






//--------------------------------------

//  Print particular object

// square notation ==> obj["key"]
// dot notation    ==> obj.key

// console.log(obj["name"]);
// console.log(obj.price);





//-----------------------------------------------------

// Nested object 
let student = {
  name: "tushar",
  rollNo: 10,
  marks: 90,
  LScore: [{ hindi: 90, english: 50, Science: 80 }],
  Yadmission: 2024,
  status: false | true,
  stadium: {
    venue: "wankhde",
    year: 2020,
    weather: { high: 35, low: 24 },
  },
};
// console.log(student);
// console.log(student["marks"]);



//------------------------------------------------------
// Update the value of 'low' to 7777
student.stadium.weather.low = 7777;
// console.log(student);





// -------------------------------------------------------
// delete the value
delete student.name;

//--------------------------------------------------------
let intro = {
  name: "tushar",
  email: "tushar@gmail.com",
  mobile: 7579787177,
  gender: "male",
};
console.log(intro)

//---------------------------------------------------------------
for (let key in intro) {
//   console.log(intro.key)    // Output - Undefined 
//   console.log(key, intro[key])    // dynamic key access
}

//---------------------------------------------
// Add text between print object
for(let mykey in intro){
    console.log(mykey + " = " + intro[mykey])
}

//------------------------------------------------------

let arrr = ["apple", "mango", "grapes"]

let objj = {}
for(let i = 0; i < arrr.length; i++){
    objj[i] = arrr[i]
}
console.log(arrr)       // [ 'apple', 'mango', 'grapes' ]
console.log(objj)       // { '0': 'apple', '1': 'mango', '2': 'grapes' }

//-------------------------------------------------------------------------

// let arr2 = ["a", "b", "c" ,"d" ,"e" ,"f"]
let str = "abcdefghijklmnopqrstuvwxyz"

let obj2 = {}


for(let i =0; i < str.length; i++){
    obj2[i] = str[i]
}
console.log(obj2)    // Output :  Print A to Z Alphabet with Serial Number

//---------------------------------------------------------------------------
// Print odd value 
let obj3 = {
    key1 : 1,
    key2 : 2,
    key3 : 3,
    key4 : 4,
    key5 : 5,
    key6 : 6,
}

for(let key in obj3){
if(obj3[key] % 2 === 0){
    console.log(key)
}
}

console.log(Object.keys(obj3))  // [ 'key1', 'key2', 'key3', 'key4', 'key5', 'key6' ]
console.log(Object.values(obj3)) //[ 1, 2, 3, 4, 5, 6 ]

console.log("key3" in obj3)     // true
console.log("keyeee3" in obj3)  // false

