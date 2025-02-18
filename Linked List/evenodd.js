// Given a linked list, your task is to complete the function isLengthEven() which contains the head of the linked list, and check whether the length of the linked list is even or not. Return true if it is even, otherwise false.

// Examples:

// Input: Linked list: 12->52->10->47->95->0

// Output: true
// Explanation: The length of the linked list is 6 which is even, hence returned true.
// Input: Linked list: 9->4->3

// Output: false
// Explanation: The length of the linked list is 3 which is odd, hence returned false.
// Constraints:
// 1 <= number of nodes <= 105
// 1 <= elements of the linked list <= 105

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Solution {
    // Function should return 0 if length is even else return 1
    isLengthEven(head) {
        let current = head;
        while (current !== null && current.next !== null) {
            current = current.next.next;
        }
        return current === null ? true : false;
    }
}

// Creating a Linked List: 1 → 2 → 3 → 4 → null (Even Length)
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Creating an instance of Solution
let solution = new Solution();

// Calling function and logging output
console.log("Is Length Even?", solution.isLengthEven(head)); // Expected Output: 0
