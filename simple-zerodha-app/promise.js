const fs = require("fs") ; 

function tamashReadsFile(fun){
    console.log("inside tamash's readme file") ;
    fs.readFile("a.txt","UTF-8",function(err,data){
        console.log("tamash"); 
        fun(data) ;
    })
}

function showData(data){
    console.log(data) ; 
}

tamashReadsFile(showData) ; 

// Promises - It's just syntactical sugar( Still uses callbacks under the hood ). 

function kiratReadsFile(){
    console.log("inside kirat's readme file") ;
    return new Promise( function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            console.log("kirat"); 
            resolve(data) ; 
        })
    }) ; 
}


kiratReadsFile().then(showData) ; 

let a = kiratReadsFile() ; 
console.log(a) ; 
a.then(showData) ;  

