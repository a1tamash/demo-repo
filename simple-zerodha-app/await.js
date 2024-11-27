// 1.0 
function kiratAsyncFunction(){
    let p = new Promise( function(resolve){
        resolve("Hi There 1.0") ; 
    }); 

    return p ; 
}

let value = kiratAsyncFunction() ; 

console.log(value) ; 

// 2.0

function kiratAsyncFunction2(){
    let p = new Promise( function(resolve){
        setTimeout(function(){
            resolve("Hi There 2.0") ;
        },2000) ; 
    })

    return p ;
}

value = kiratAsyncFunction2() ; 

console.log(value) ; 

// 3.0 

function kiratAsyncFunction3(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hi There 3.0");
        },2000); 
    })

    return p ; 
}

async function main(){
    let value = await kiratAsyncFunction3() ; 

    console.log(value) ; 
}

main() ; 


