// console.log("outside function 1") ; 

// function promisifiedFunction(){
//     console.log("function called 3") ; 
//     return new Promise( function(resolve) {
//         console.log("inside promise callback 4") ; 
        
//         setTimeout( function(){
//             console.log("setTimeout called 5") ; 
//             resolve("done baby!!! I am burnt out") ; 
//         },2000) ;
//     })
// }

// console.log("in the middle 2") ; 
// promisifiedFunction().then( function(value){
//     console.log("promisified value 6") ;
//     console.log(value) ;
// });


console.log("outside function 1") ; 
function promisifiedFunction(){
    console.log("inside function 3") ;
    return new Promise( function(resolve){
        console.log("inside promise 4") ;
        setTimeout(function(){
            console.log("inside timeout 5") ; 
            resolve("done baby! I'm burnt out!") ; 
        },5000); 
    }); 
}


console.log("in the middle 2") ; 
promisifiedFunction().then( function(value){
    console.log("promisified then 6") ; 
    console.log(value) ;
})