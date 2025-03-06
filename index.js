
//---------------- Each Part will need to be commented out ------------

//Part 1: Refactoring Old Code

let csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

//Split the string everytime a \n character is encountered and save each row in a new array
let newcsv = csv.split("\n");
console.log(newcsv);

// //Part 2: Expanding Functionality

// let csv2 = [
//   'ID,Name,Occupation,Age',
//   '42,Bruce,Knight,41',
//   '57,Bob,Fry Cook,19',
//   '63,Blaine,Quiz Master,58',
//   '98,Bill,Doctor’s Assistant,26'
// ]

// //Outter array
// let csvOutter = [];
// //loop through csv2, split everytime a "," is encountered and push the result into an array
// for(let i=0; i< csv2.length; i++) {
//   csvOutter.push(csv2[i].split(","));
// }
// console.log(csvOutter);

// //Part 3: Transforming Data

// //result of part 2
// let csv3 = [
//   ["ID", "Name", "Occupation", "Age"],
//   ["42", "Bruce", "Knight", "41"],
//   ["57", "Bob", "Fry Cook", "19"],
//   ["63", "Blaine", "Quiz Master", "58"],
//   ["98", "Bill", "Doctor’s Assistant", "26"],
// ];

// //An array to hold each person
// let persons = [];

// // Stores the headers or the key
// let csv3Headers = csv3[0];

// // Iterate through the outer array
// // Start at one because I already used row one as the header
// for (let i = 1; i < csv3.length; i++) {
//   // The current array
//   let currentRow = csv3[i];
//   // Object to hold person
//   let person = {};
//   // Iterate the current row
//   for (let j = 0; j < currentRow.length; j++) {
//     //Select the header from the csv3 Headers
//     let header = csv3Headers[j];
//     // Convert the header to lowercase
//     header = header.toLowerCase();
//     // Assign the value to the header
//     person[header] = currentRow[j];
//   }
//   persons.push(person);
// }

// console.log(persons);

// // Part 4: Sorting and Manipulating Data

// let csv4 = [
//   { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//   { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//   { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//   { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" },
// ];

// // Sort the array
// csv4 = csv4.sort();
// // console.log(csv4);

// // 1. Remove the last element from the sorted array
// csv4.pop();

// // 2. Insert { id: "48", name: "Barry", occupation: "Runner", age: "25" } at index 1
// csv4.splice(1,0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });


// //3. Add { id: "7", name: "Bilbo", occupation: "None", age: "111" } to the end of the array
// csv4.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
// console.log(csv4);

// // Part 5: Full Circle
// let csv5 = [
//   { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//   { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//   { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//   { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//   { id: "7", name: "Bilbo", occupation: "None", age: "111" },
// ];

