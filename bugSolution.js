function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Or throw an error: throw new Error('Inputs cannot be null or undefined');
  }
  return a + b; 
}