
Q1. What is Arrays and types?
In JavaScript, an array is a special type of variable that can hold more than one value. It's like a container that stores a list of items, 
where each item can be of any data type (numbers, strings, objects, etc.)

Characteristics of Arrays in JavaScript:
a. Indexed Collection: Elements in an array are indexed starting from 0.
b. Dynamic Size: Arrays can change in size, meaning you can add or remove elements as needed.
c. Homogeneous or Heterogeneous: Arrays can hold elements of different data types.
d. Mutable: You can modify the elements of an array.

Types of Arrays:
i.   Single-Dimensional Arrays: The most basic type, holding a list of elements.
     let numbers = [1, 2, 3, 4, 5];;

ii.  Multi-Dimensional Arrays: Arrays of arrays, often used to represent matrices or grids.
     let matrix = [
     [1, 2, 3],
     [4, 5, 6],
     ];

iii. Sparse Arrays: Arrays where some elements are not defined.
     let sparseArray = [];
     sparseArray[10] = "ten"; // Only one element at index 10




Q2. How to create Arrays ?

a. Using Array Literals:
   let fruits = ["apple", "banana", "cherry"];
  
b. Using the Array Constructor:
   let fruits = new Array("apple", "banana", "cherry");

c. Creating an Empty Array:
   let emptyArray = [];

d. Creating an Array with a Specific Length:
   let arrayWithLength = new Array(10); // Creates an array with 10 undefined elements



Q3.Inbuild  Methods of Array:
JavaScript arrays come with many built-in methods to manipulate and interact with array data:

a. push(): Adds one or more elements to the end of an array.
   arr.push("fruits")

b. pop(): Removes the last element from an array.
   fruits.pop();

c. shift(): Removes the first element from an array.
   fruits.shift();

d. unshift(): Adds one or more elements to the beginning of an array.
   fruits.unshift("apple");

e. join(' '): Convert the array to a string with space-separated values
   arr.join(' ');

f. 