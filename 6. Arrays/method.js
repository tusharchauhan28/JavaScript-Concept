// console.log(arr.pop())     // It's use for directly see the index which one i do modify

let arr = ["apple", "banana", "grapes", "kiwi"]

// Access the array 
console.log(arr)

// direct access array by indexing 
console.log(arr[2])

// Update the arrray by indexing 
arr[2] = "mango-update"
console.log(arr)

// push(): Adds one or more elements to the end of an array.
arr.push("last-banana")
console.log(arr)

// pop(): Removes the last element from an array.
   arr.pop();
   console.log(arr)
   console.log(arr.pop())


// shift(): Removes the first element from an array.
arr.shift();
console.log(arr)

// unshift(): Adds one or more elements to the beginning of an array.
   arr.unshift("F-apple");
   console.log(arr)

// join(' '): Convert the array to a string with space-separated values
   arr.join(' ');


