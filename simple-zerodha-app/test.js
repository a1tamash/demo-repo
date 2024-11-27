// // Object Methods Explanation
// function objectMethods(obj) {
//     console.log("Original Object:", obj);
  
//     let keys = Object.keys(obj);
//     console.log("After Object.keys():", keys);
  
//     let values = Object.values(obj);
//     console.log("After Object.values():", values);
  
//     let entries = Object.entries(obj);
//     console.log("After Object.entries():", entries);
  
//     let hasProp = obj.hasOwnProperty("property");
//     console.log("After hasOwnProperty():", hasProp);
  
//     let newObj = Object.assign({}, obj, { newProperty: "newValue" });
//     console.log("After Object.assign():", newObj);
  
  
//   }
  
  // Example Usage for Object Methods
  const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  };
  
//   objectMethods(sampleObject);

  console.log(Object.keys(sampleObject)) ;
  console.log(Object.values(sampleObject)) ; 
  console.log(Object.entries(sampleObject)) ; 


  console.log( sampleObject.hasOwnProperty("key")) ;

  console.log( Object.assign({},sampleObject,{ altamash : "Leesha"})) ; 

  
  