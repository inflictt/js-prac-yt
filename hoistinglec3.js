// HOW THIS CODE RUNS IN JAVASCRIPT'S GLOBAL EXECUTION CONTEXT


// PHASE 1: Memory Creation Phase
// (JavaScript scans the code from top to bottom before executing anything)

// 1. Line 4: Sees 'var x'. It allocates memory for a variable named 'x'
//    and gives it a special placeholder value: undefined.
//    --> In Memory: x: undefined

// 2. Line 5: Sees 'function getName()'. It allocates memory for 'getName'
//    and stores the ENTIRE function code within it.
//    --> In Memory: getName: { function code... }


// PHASE 2: Code Execution Phase
// (JavaScript runs the code from top to bottom again, this time executing it)

// 1. Line 1: getName();
//    - JavaScript looks for 'getName' in its memory.
//    - It finds the full function code and can execute it without any problem.
//    - A new Function Execution Context is created, it runs console.log, and is then destroyed.
//    - OUTPUT: "Namaste JavaSciprt"

getName();

// 2. Line 2: console.log(x);
//    - JavaScript looks for 'x' in its memory.
//    - It finds 'x', but its value is still the placeholder 'undefined' from Phase 1.
//    - The assignment 'x = 7' hasn't happened yet.
//    - OUTPUT: undefined

console.log(x);

// 3. Line 4: var x = 7;
//    - The assignment operation is now performed.
//    - The value 7 is placed into the memory location for 'x'.
//    - --> In Memory: x: 7 (The value of 'x' is now 7 for any code that runs after this line).

var x = 7;

// 4. Line 5: function getName(){...}
//    - JavaScript sees the function definition again but does nothing,
//    - as the function was already placed in memory during Phase 1.

function getName() {
  console.log("Namaste JavaSciprt");
}
// }
// Key Takeaway:


// Function Declarations: Are hoisted fully. The entire function body is placed in memory before the code runs, which is why you can call them at the top of your file.

// var Variables: Are hoisted partially. Only the declaration (var x) is "lifted" to the top, and the variable is initialized with undefined. The assignment (= 7) happens exactly where you wrote it in the code execution phase.
