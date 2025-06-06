// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true


function isValid(s) {
    const stack = [];
    const map = { ')' : '(' , '}' : '{' ,']' : '['};

    for (let char of s) {
        if ( char in map) {
            if(stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;   

console.log(isValid("()"));        
console.log(isValid("()[]{}"));  
console.log(isValid("(]"));       
console.log(isValid("([])"));      
console.log(isValid("{[()]}"));    
console.log(isValid("([)]"));      
}