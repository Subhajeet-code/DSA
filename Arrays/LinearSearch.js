// Input: arr[] = [1, 2, 3, 4], x = 3
// Output: 2
// Explanation: There is one test case with array as [1, 2, 3 4] and element to be searched as 3. Since 3 is present at index 2, the output is 2.


// Input: arr[] = [10, 8, 30, 4, 5], x = 5
// Output: 4
// Explanation: For array [1, 2, 3, 4, 5], the element to be searched is 5 and it is at index 4. So, the output is 4.


// Input: arr[] = [10, 8, 30], x = 6
// Output: -1
// Explanation: The element to be searched is 6 and its not present, so we return -1.

// function linear(arr,x,n){
//     for(let i=0;i<n;i++){
//         if(arr[i]==x){
//            return i;
//         }
//     }
//     return -1;
// }
// let arr = [3,6,10,12];
// let x = 10;
// let n = arr.length;
// let result = linear(arr,x,n);
// (result == -1) ? console.log("Element is not present in an array") : console.log("Element is present in an array", result);
//O(n) and O(1) -> Time and space complexity respectively



///if user wants to give the input 
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            return i;
        }
    }
    return -1;
}

rl.question("Enter elements of the array separated by space: ", (inputArray) => {
    let arr = inputArray.split(" ").map(Number); // Convert input to array of numbers

    rl.question("Enter the number to search: ", (x) => {
        x = Number(x);
        let result = linearSearch(arr, x);

        if (result == -1) {
            console.log("Element is not present in the array");
        } else {
            console.log(`Element is present at index ${result}`);
        }

        rl.close();
    });
});




// if browser js running
// const input = prompt("Enter elements of the array separated by space:");
// const arr = input.split(" ").map(Number);
// const x = Number(prompt("Enter the number to search:"));

// function linearSearch(arr, x) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === x) {
//             return i;
//         }
//     }
//     return -1;
// }

// const result = linearSearch(arr, x);
// console.log(result === -1 ? "Element not found" : `Element found at index ${result}`);
