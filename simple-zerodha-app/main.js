// let age = 18 ;
// let name = "altamash" ;
// let isMarried = false ; 

// // console.log(age) ;
// // console.log(isMarried) ;
// // console.log(name) ;

// // console.log(
// //     "this person's name is " + name + " and their age is " + age 
// // ) ; 

// // if( age > 18 ) 
// //     console.log( name + " is married!" ); 
// // else 
// //     console.log( name + " is not married!") ;

// for(let i=0; i<5 ; i++){
//     console.log("bhupendra jogi");
// }


function sumOfSomething( a , b , fn ){

    console.log(fn) ; 
    let val1 = fn(a) ; 
    let val2 = fn(b) ; 

    return val1 + val2 ;
}

function square(a) {
    return a*a ; 
}

function cube(a) {
    return a*a*a ; 
}

// let ans = sumOfSomething(2,2,cube) ; 
 
let ans = sumOfSomething( 2 , 3 , function(x){
    return x*x*x ;  
});

console.log(ans) ;