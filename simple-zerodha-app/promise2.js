   // Practical Example of a Promise

let d = new Promise(function(resolve){
    setTimeout(function(){
        resolve("foo") ; 
    },10000) ; 
})

function callback(){
    console.log(d) ; 
}

console.log(d) ;
d.then(callback) ;



// Promises is nothing but wrapper over a callback function, which lets you write code in a cleaner fashion

// Normal Function - we have to write callbacks 

function tamashAsyncFunction(callback){
    setTimeout(callback,2000) ; 
}

tamashAsyncFunction( function(){
    console.log("Hi There 2") ; 
}) ; 


// Using Promises - we can use the concept of promises which is nothing but a wrapper over a normal callback function , which lets you write a cleaner code.

function tamashAsyncFunction2(){
    let p = new Promise( function(resolve){
        setTimeout(resolve,2000) ; 
    } ) ; 

    return p ; 
}

tamashAsyncFunction2().then(function(){
    console.log("Hi There 3") ; 
});
