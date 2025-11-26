function iterate(object, callback) {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        callback(key, object[key], object);
      }
    }
  }
  
  const obj = { a: 10, b: 20, c: 30 };
  iterate(obj, (key, value) => {
    console.log({ key, value });
  });
  
 
  