// You are climbing a staircase. It takes n steps to reach the top.

// Each time, you can either climb 1 step or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top:
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top:
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

//Bruteforce
// const climbStairs = (n) => {
//     if (n === 1) return 1;
//     if (n === 2) return 2;
//     return climbStairs(n - 1) + climbStairs(n - 2);
//   };
  
//   console.log(climbStairs(5)); // Output: 8
//Drawback:Exponential O(2ⁿ) time complexity → Very slow for large n.  

//DP[bottom-up approach]
const climbStairsDP = (n) => {
    if (n === 1) return 1;
    let dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
  
    for (let i = 3; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
  };
  
  console.log(climbStairsDP(8)); // Output: 8
//   ✅ Time Complexity: O(n)
//   ✅ Space Complexity: O(n) (array stores n values)  



