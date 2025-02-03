function foo(a, b) {
  if (a === null || b === null) {
    return null; //This is the problematic line, it may throw an error
  }
  return a + b; 
}