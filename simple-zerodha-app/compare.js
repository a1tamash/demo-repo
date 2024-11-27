// Normal Callbacks 

function kiratAsyncFunction1(callback){

    // do some async logic here
    callback("Hi There 1.0") ; 
}

kiratAsyncFunction1(function(value){
    console.log(value) ; 
}) ; 


// Promises - Syntactical Sugar - more readability

function kiratAsyncFunction2(){
    let p = new Promise(function(resolve){
        resolve("Hi There 2.0") ; 
    }); 

    return p ;
}

kiratAsyncFunction2().then(function(value){
    console.log(value) ; 
}) ;


// async , await syntax 

function kiratAsyncFunction3(){
    let p = new Promise(function(resolve){
        resolve("Hi There 3.0") ; 
    }) ;

    return p ;
} 

async function main(){
    let value = await kiratAsyncFunction3() ; 
    console.log(value) ; 
}

main() ;