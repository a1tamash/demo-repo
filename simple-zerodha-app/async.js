const fs = require("fs") ;  // File System Module 

fs.readFile(
    "a.txt" , "UTF-8" , function(err,data){
        console.log(data) ; 
    }
);

console.log("Hi There 1.0") ; 

let a = 0 ;
for(let i=0; i<100000 ; i++){
    a++ ; 
}

console.log("async call tel lene jaaye") ; 
