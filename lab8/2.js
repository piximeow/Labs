function store(value) {
    return () => value;
  }
  
  const read = store(6);
  const value = read();
  console.log(value); 
  