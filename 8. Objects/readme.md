Q1. What is Object ? 
An object is a collection of key-value pairs, where the keys are strings (or symbols) and the values can be any data type (including other objects). 
Think of it like a container that holds related pieces of information.

// Key Characteristics of Objects
Non-primitive: Unlike primitive data types such as strings, numbers, and booleans, objects can store multiple values and more complex data structures.
Mutable: The values stored in objects can be changed.

What is the concept?
Object methods in JavaScript are functions that are defined as properties of an object. They enable objects to perform actions or tasks, 
encapsulating behaviors within the object itself.

Why is it useful?
Object methods provide a convenient way to organize and encapsulate related functionality within an object. 
They enhance code readability, maintainability, and reusability by associating behaviors directly with the object they operate on. 
This approach aligns with the principles of object-oriented programming.

//--------------------------------------------------------------------
Q.2 How many types to create Object ?
There are four types of objects in JavaScript:
1. Object Literals
2. Using the new Object() Syntax
3. Using Constructor Functions
4. Using ES6 Classes

1. Object Literals
let person = {
  name: "Alice",
  age: 30,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

2. Using the new Object() Syntax
 let person = new Object();
person.name = "Alice";
person.age = 30;
person.greet = function() {
  console.log("Hello, my name is " + this.name);
};


3. Using Constructor Functions
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
}
let person = new Person("Alice", 30);

4. Using ES6 Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hello, my name is " + this.name);
  }
}
let person = new Person("Alice", 30);

//--------------------------------------------------------------------
Q3. How to use Accessing Properties in Object ?
1. Dot Notation
console.log(person.name); // "Alice"

2. Bracket/Square Notation
console.log(person["name"]); // "Alice"

//--------------------------------------------------------------------
Q4. How to use Modifying Properties in Object ?

1. Add/Update Property
person.name = "Bob";
person.city = "New York"; // Adding a new property

2. Delete Property
delete person.age;

//--------------------------------------------------------------------
Q5. How many types of Objects ?

1. Native Objects (Built-in Objects): 
2. Host Objects: 
3. User-defined Objects: 


1. Native Objects (Built-in Objects): These are standard built-in objects provided by JavaScript.

a. Object: The base object from which all other objects inherit. It provides methods like toString(), hasOwnProperty(), and more.
// let obj = new Object();

b. Array: Used to store multiple values in a single variable. It includes methods like push(), pop(), map(), and filter().
// let arr = [1, 2, 3];

c. Function: Represents a function. Functions are objects in JavaScript and can have properties and methods.
// function myFunction() {
  console.log("Hello, world!");
}

d. Date: Used to work with dates and times. It provides methods for getting and setting year, month, day, hour, minute, second, and millisecond.
// let date = new Date();

e. RegExp: Used for matching text with patterns. It provides methods like test() and exec().
// let regex = /ab+c/;

f. Math: Provides properties and methods for mathematical constants and functions such as Math.PI, Math.random(), and Math.sqrt().
// let random = Math.random();

g. String: Used to work with text. It includes methods like charAt(), indexOf(), substring(), and split().
let str = "Hello, world!";

h. Number: Used to work with numbers. It includes properties like Number.MAX_VALUE and methods like toFixed() and toString().
// let num = 123.456;

i. Boolean: Represents a logical entity and can have two values: true and false.
// let bool = true;

------------------
2. Host Objects
These objects are provided by the environment in which JavaScript is running, such as the browser or Node.js. 
They are not part of the JavaScript language itself but are provided by the host environment.

Examples in Browsers:
Window: Represents the browser window.
Document: Represents the HTML document loaded in the window.
HTMLElement: Represents an element in the HTML document.
XMLHttpRequest: Used to make HTTP requests.

// console.log(window.innerWidth);
// let div = document.createElement('div');

Examples in Node.js:
fs: Provides an API for interacting with the file system.
http: Used to create HTTP servers and make HTTP requests.
process: Provides information and control over the current Node.js process.

const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

------------------
3. User-defined Objects
These are objects defined by the user in their code, using object literals, constructor functions, ES6 classes, or other patterns.

Program 1 - Object Literals:

let person = {
  name: "Alice",
  age: 30,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

Program 2 - Constructor Functions
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
}
let person = new Person("Alice", 30);


Program 3 - ES6 Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hello, my name is " + this.name);
  }
}
let person = new Person("Alice", 30);

Program 4 - Using Object.create()
let personPrototype = {
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

let person = Object.create(personPrototype);
person.name = "Alice";
person.age = 30;


//--------------------------------------------------------------------
//--------------------------------------------------------------------
Real-world examples or analogies
Consider an object representing a user profile. Using object methods, you can define behaviors such as logging in, logging out, updating profile information, or sending messages. 
These methods encapsulate the actions that a user can perform within the application.

Objects are usually created to represent entities of the real world, like users, orders and so on:

var user = { name: "John", age: 30 };

And, in the real world, a user can act: select something from the shopping cart, login, logout etc.
Actions are represented in JavaScript by functions in properties.


//--------------------------------------------------------------------
// Method examples
Code Implementation | Examples

For a start, let’s teach the user to say hello:
`var user = { name: "John", age: 30 };
user.sayHi = function() { alert("Hello!"); };
user.sayHi(); // Hello!`

Here we’ve just used a Function Expression to create a function and assign it to the property user.sayHi of the object.
Then we can call it as user.sayHi(). The user can now speak!
A function that is a property of an object is called its method.
So, here we’ve got a method sayHi of the object user.
Of course, we could use a pre-declared function as a method, like this:
`var user = { // ... };
*// first, declare function sayHi() { alert("Hello!"); }
// then add as a method user.sayHi = sayHi;*
user.sayHi(); // Hello!`


//--------------------------------------------------------------------
Object Coding Problem : 
//Problem 1: Print Hello World using a Object Method print
var details = {
  name : "Shubham",
  age : 31,

  print : function(){
            console.log("Hello world");
          }
};
console.log(details.name);
details.print();

//--------------------------------------------------------------------
//Problem 2:
var details = {
  name : "Shubham",
  age : 31,

  print : function(x){
            var y = x+2;
            return y;
          }
};
console.log(details.print(4));

//--------------------------------------------------------------------
Problem 3:
var details = {
  name : "Shubham",
  age : 31,

  print : function(name){
            console.log("Hello",this.age,this.name);
          }
};
var name = "Shyam";
details.print(name);

//--------------------------------------------------------------------
Problem 4:
var details = {
  name : "Rajpal",
  age : 1000,
  hobbies : ["coding","music"],

  print : function()
          {
            console.log("Hello",this.name);
            console.log("My age is",this.age);
            console.log("Hobbies are",this.hobbies.join(" "));
          }
}
details.print();

//--------------------------------------------------------------------
Problem 5: Create two methods for the rectangle object
1. perimeter
2. area

var rectangle = {
  length : 30,
  breadth : 40,

  perimeter : function()
              {
                console.log(2*(this.length+this.breadth));
              },

  area : function()
           {
              console.log(this.length*this.breadth);
            },
};
rectangle.perimeter();
rectangle.area();
rectangle.length =10;
rectangle.breadth = 30;
rectangle.perimeter();
rectangle.area();

//--------------------------------------------------------------------
Problem 6: Calculate the total price with the given quantity and price
var e_commerce = {
  products : ["earphone","headphone","earpods"],
  quantity : [4,3,2],
  price : [700, 800, 1000],

  total_price : function(){
              var sum=0;
              for(var i = 0;i<this.quantity.length;i++)
              {
                sum = sum + (this.quantity[i] * this.price[i]);
              }
              return sum;
            }
};
console.log(e_commerce.total_price());

//--------------------------------------------------------------------
Problem 7: Convert to Array of Objects
var products = ["macbook","iphone","ipad"];
var prices = [500000, 40000,50000];

var data = [];
for(var i=0; i<products.length; i++)
{

  var obj = {};
  // obj["name"] = products[i];
  // obj["price"] = prices[i];
  obj.name = products[i];
  obj.price = prices[i];

  data.push(obj);
}
console.log(data);


//--------------------------------------------------------------------
Student Activities
Problem 8: Create an object with the following functionality

Ability to add student details and 3 subject marks
//Create an object with the following functionality
//Ability to add student details and 3 subject marks

var details = {

  data : [],

  addStudent : function(nam, math, sci, eng)
              {
                  var obj = {};
                  obj.name = nam;
                  obj.maths = math;
                  obj.science = sci;
                  obj.english = eng;

                  this.data.push(obj);
              }
};

details.addStudent("Shubham", 10, 20, 30);
details.addStudent("Rahul", 15, 25, 35);

console.log(details.data);

//--------------------------------------------------------------------
Problem 9:
Create a object method to find low score student
var details = {

  data : [],

  addStudent : function(nam, math, sci, eng)
              {
                  var obj = {};
                  obj.name = nam;
                  obj.maths = math;
                  obj.science = sci;
                  obj.english = eng;

                  this.data.push(obj);
              },

  lowScore : function(){

              var lowStudent = null;
              var lowTotal = null;

              for(var i=0; i<this.data.length; i++)
              {
                var currStudent = this.data[i];
                var total = currStudent.maths + currStudent.science + currStudent.english;

                if(lowTotal == null || total<lowTotal)
                {
                  lowTotal = total;
                  lowStudent = currStudent;
                }

              }

              return lowStudent;

  }

};

details.addStudent("Shubham", 10, 20, 30);
details.addStudent("Rahul", 15, 25, 35);

// console.log(details.data);
console.log(details.lowScore());
