function foo(a, b) {
  // Use strict equality (===) to avoid type coercion issues
  if (a === null || b === null) {
    return 0; // Handle null values explicitly
  }
  return a + b; // Add numbers
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0