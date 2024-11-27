// function square(n){
//     return n*n ; 
// }

// function cube(n){
//     return n*n*n ; 
// }

// function sumOfSomething(a,b,fn){
//     let val1 = fn(a) ; 
//     let val2 = fn(b) ; 

//     return val1+val2 ; 
// }

// const ans = sumOfSomething(2,2,cube) ; 
// console.log(ans) ;

// let fs = require("fs") ; 

// fs.readFile("a.txt","utf-8",function(err,data){
//     console.log(data) ; 
// }) ;  

function onDone(){
    console.log("hi there") ; 
}

setTimeout(onDone,2000) ; 
console.log("after settiemout") ;

// for(let i=0; i<10000000000 ; i++){
// }

console.log("after loop") ; 

// Promise Chaining 

function promisifiedOutput(duration){
    const p = new Promise( function(resolve){
        setTimeout(resolve,duration); 
    }); 

    return p ;
}

promisifiedOutput(3000).then( function(){
    console.log("first is done") ; 
    return promisifiedOutput(2000) ; 
})
.then( function(){
    console.log("second is done as well") ;
}); 