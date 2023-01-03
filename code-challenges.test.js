// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// RED:

// describe("fibDouble", () => {
//   it("takes in a number greater than 2 and returns length of numbers in sequence", () => {
//     const fibLength1 = 6
//     // Expected output: [1, 1, 2, 3, 5, 8]
    
//     const fibLength2 = 10
//     // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//     expect(fibDouble(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
//     expect(fibDouble(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//   })
// })
// FAIL  ./code-challenges.test.js
// fibDouble
//   ✕ takes in a number greater than 2 and returns length of numbers in sequence

// ● fibDouble › takes in a number greater than 2 and returns length of numbers in sequence

//   ReferenceError: fibDouble is not defined

// b) Create the function that makes the test pass.

// GREEN:

// PSEUDOCODE:
// declare a function named fibDouble.
// input: a number
// output: returns an array with that length containing numbers of Fibonacci sequence

// const fibDouble = (n) => {
//     if (n==2) 
//     {
//       return [1, 1];
//     } 
//     else 
//     {
//       var s = fibDouble(n - 1);
//       s.push(s[s.length - 1] + s[s.length - 2]);
//       return s;
//     }
//   };
//     console.log(fibDouble(6));
//     console.log(fibDouble(10)); 
//  PASS  ./code-challenges.test.js
//  fibDouble
//    ✓ takes in a number greater than 2 and returns length of numbers in sequence (1 ms)

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

// RED:

// describe("bothStudyMinutes", () => {
//   it("takes in an object and return array sorted least to greatest", () => {
//     const studyMinutesWeek1 = {
//       sunday: 90,
//       monday: 30,
//       tuesday: 20,
//       wednesday: 15,
//       thursday: 30,
//       friday: 15,
//       saturday: 60
//     }
//     // Expected output: [15, 15, 20, 30, 30, 60, 90]
    
//     const studyMinutesWeek2 = {
//       sunday: 100,
//       monday: 10,
//       tuesday: 45,
//       wednesday: 60,
//       thursday: 20,
//       friday: 15,
//       saturday: 65
//     }
//     // Expected output: [10, 15, 20, 45, 60, 65, 100]
//     expect(bothStudyMinutes(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
//     expect(bothStudyMinutes(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
//   })
// })
// FAIL  ./code-challenges.test.js
// bothStudyMinutes
//   ✕ takes in an object and return array sorted least to greatest

// ● bothStudyMinutes › takes in an object and return array sorted least to greatest

//   ReferenceError: bothStudyMinutes is not defined

// b) Create the function that makes the test pass.

// GREEN:

// PSEUDOCODE:
// declare a function named bothStudyMinutes
// input: an object
// output: an array of values sorted from least to greatest

// const studyMinutesWeek1 = {
//   sunday: 90,
//   monday: 30,
//   tuesday: 20,
//   wednesday: 15,
//   thursday: 30,
//   friday: 15,
//   saturday: 60
// }
// const studyMinutesWeek2 = {
//   sunday: 100,
//   monday: 10,
//   tuesday: 45,
//   wednesday: 60,
//   thursday: 20,
//   friday: 15,
//   saturday: 65
// }

// const bothStudyMinutes = (obj) => {
//   let minuteArray = Object.values(obj)

//   return minuteArray.sort((a,b) => {
//     return a - b
//   })
// }

// console.log(bothStudyMinutes(studyMinutesWeek1))
// console.log(bothStudyMinutes(studyMinutesWeek2))
// PASS  ./code-challenges.test.js
// bothStudyMinutes
//   ✓ takes in an object and return array sorted least to greatest (1 ms)

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// RED:

describe("transactions5", () => {
  it("takes in an array and returns array of accumlating sum", () => {
    const accountTransactions2 = [250, -89, 100, -96]
    // Expected output: [250, 161, 261, 165]
    
    const accountTransactions3 = []
    // Expected output: []
    expect(transactions5(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(transactions5(accountTransactions3)).toEqual([])
  })
})
// FAIL  ./code-challenges.test.js
// transactions5
//   ✕ takes in an array and returns array of accumlating sum

// ● transactions5 › takes in an array and returns array of accumlating sum

//   ReferenceError: transactions5 is not defined

// b) Create the function that makes the test pass.

// GREEN:

// PSEUDOCODE:
// declare a function named transactions5
// input: an array of numbers
// output: an array of the accumulating sum

const accountTransactions2 = [250, -89, 100, -96]
const accountTransactions3 = []

const transactions5 = arr => arr.reduce((a, b, i) => i === 0 ? [b] : [...a, b + a[i-1]], 0);

console.log(transactions5(accountTransactions2))
console.log(transactions5(accountTransactions3))

// Note: For the empty array I didnt figure out how to return [] instead of 0.
// [ 250, 161, 261, 165 ]

// at Object.log (code-challenges.test.js:188:9)

// console.log
// 0

// at Object.log (code-challenges.test.js:189:9)

// FAIL  ./code-challenges.test.js
// transactions5
// ✕ takes in an array and returns array of accumlating sum (2 ms)

// ● transactions5 › takes in an array and returns array of accumlating sum

// expect(received).toEqual(expected) // deep equality

// Expected: []
// Received: 0


