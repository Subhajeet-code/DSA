// Input : "3[a]2[bc]"
// Output:"aaabcbc"

// Input:"3[a2[c]]"
// Output:"accaccacc"

function decodeString(s) {
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
      // If current character is not ']', push it to stack
      if (s[i] !== ']') {
        stack.push(s[i]);
        continue;
      }
      
      // If current character is ']', start decoding
      // First, get the string inside the brackets
      let currStr = '';
      while (stack[stack.length - 1] !== '[') {
        currStr = stack.pop() + currStr;
      }
      
      // Remove the opening bracket '['
      stack.pop();
      
      // Now get the number (could be multiple digits)
      let num = '';
      while (stack.length > 0 && /\d/.test(stack[stack.length - 1])) {
        num = stack.pop() + num;
      }
      
      // Repeat the string and push back to stack
      stack.push(currStr.repeat(Number(num)));
    }
    
    return stack.join('');
  }
  
  // Test cases
  console.log(decodeString("3[a]2[bc]")); // "aaabcbc"
  console.log(decodeString("3[a2[c]]"));  // "accaccacc"
  console.log(decodeString("1[a8[c]]"));