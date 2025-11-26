function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
  
  const array = ['Paris', 'Tokyo', 'Cairo', 'Toronto'];
  console.log(array);
  removeElement(array, 'Cairo'); 
  removeElement(array, 'Berlin'); 
  console.log(array);
  
  