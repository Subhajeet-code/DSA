// Input: prices = [7, 1, 5, 3, 6, 4]
// Output: 5


// Input: prices = [7, 6, 4, 3, 1]
// Output: 0


// Input: prices = [2, 4, 1]
// Output: 2

function buy(prices){
    let minPrice = Infinity;
    // let minPrice = 0;
    let maxPrice = 0;

    for (let price of prices){
        minPrice = Math.min(minPrice , price);
        maxPrice = Math.max(maxPrice , price - minPrice)
    }

    return maxPrice;
}
console.log(buy([7,1,5,3,6,4]));
console.log(buy([2,4,1]));