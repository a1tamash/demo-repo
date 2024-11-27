function myOwnAsyncFunction( fn , duration ){
    setTimeout(fn,duration) ; 
}

myOwnAsyncFunction(function(){
    console.log("print this after 2 seconds") ; 
},2000) ; 



