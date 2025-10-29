// PHASE 1: MEMORY CREATION

// 1. A Global Execution Context (GEC) is created and pushed to the bottom of the Call Stack.
// 2. JavaScript scans the entire code and allocates memory for all variables and functions.
//    - A variable 'n' is created in memory and assigned a placeholder value: undefined.
//    - A function 'square' is created, and its entire code is placed in memory.
//    - A variable 'ans' is created in memory and assigned a placeholder value: undefined.

var n = 4; // PHASE 2: CODE EXECUTION - The value 4 is now assigned to 'n'.

function square(num) {
    // This is just the function definition; it is not executed yet.
    var ans = num * num;
    return ans;
}

// 3. The 'square' function is invoked (called) with the argument 'n' (which is 4).
var ans = square(n); // The return value of the function will be stored in 'ans'.

//    - A NEW Function Execution Context is created for this function call.
//    - It is pushed on top of the Global Execution Context in the Call Stack.
//    - INSIDE this new context, memory is allocated for its local variables:
//      - The parameter 'num' is created and assigned the value passed in (4).
//      - The local variable 'ans' is created and assigned 'undefined'.
//    - NOW, the code inside the function is executed line by line.
//      - 'ans' is calculated (4 * 4), so 'ans' becomes 16.
//      - The 'return' keyword sends the value of 'ans' (16) back to where the function was called.
//    - After the return, this ENTIRE Function Execution Context is popped off the Call Stack and destroyed.

// 4. The returned value (16) is now assigned to the global variable 'ans'.

console.log(ans); // 5. The value of 'ans' (16) is printed to the console.

// 6. After all the code has been executed, the Global Execution Context is also popped from the Call Stack, and the program finishes.


// Visualizing the Call Stack


// Start of the program: The Global Execution Context (GEC) is created and pushed onto the stack.

// |                      |
// |                      |
// |                      |
// |                      |
// |______________________|
// | Global Execution     |
// |______________________|

// Function square(4) is called: A new Function Execution Context (FEC) for square is created and pushed on top of the GEC.

// code
// Code
// download
// content_copy
// expand_less
// |                      |
// |                      |
// | square() Execution   |
// |______________________|
// | Global Execution     |
// |______________________|

// Function square returns: The square function finishes and returns 16. Its execution context is popped off the stack and destroyed.

// code
// Code
// download
// content_copy
// expand_less
// |                      |
// |                      |
// |                      |
// |                      |
// |______________________|
// | Global Execution     |
// |______________________|

// End of the program: After the console.log and all other lines are finished, the GEC is also popped from the stack.
