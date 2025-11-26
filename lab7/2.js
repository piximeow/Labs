function removeElements(array, ...items) {
    items.forEach(item => {
      const index = array.indexOf(item);
      if (index !== -1) {
        array.splice(index, 1);
      }
    });
  }
  
  const array = ['Paris', 'Tokyo', 'Cairo', 'Toronto'];
  console.log(array);
  removeElements(array, 'Cairo', 'Berlin', 'Paris');
  console.log(array);
 
  