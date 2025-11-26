function difference(array1, array2) {
    return array1.filter(item => !array2.includes(item));
  }
  
  const array1 = ['New York', 'Paris', 'Berlin', 'Rome'];
  const array2 = ['Berlin', 'Tokyo', 'Paris'];
  const result = difference(array1, array2);
  console.log(result);
 
  