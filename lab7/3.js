function unique(array) {
    return Array.from(new Set(array));
  }
  
  const result = unique(['apple', 'banana', 'apple', 'cherry', 'banana']);
  console.log(result);
  
  