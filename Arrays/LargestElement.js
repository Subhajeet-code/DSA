
// Input: arr[] = [10, 20, 4]
// Output: 20
// Explanation: Among 10, 20 and 4, 20 is the largest. 


// Input: arr[] = [20, 10, 20, 4, 100]
// Output: 100

function largest(arr) {
    let max= arr[0];
    for(let i=1; i <arr.length; i++){
        if(arr[i] > max){
            max= arr[i];
        }
     
    }
    return max;

}
console.log(largest([20, 10, 20, 4, 100]));


//In-built functionalities
// function largest(arr) {
//     return Math.max(...arr);
// }
// console.log(largest([20, 10, 20, 4, 100]))