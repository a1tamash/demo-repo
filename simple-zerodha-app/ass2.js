const startTime = Date.now() ; 

setTimeout( () => {
    const endTime = Date.now() ; 
    const elapsedTime = endTime - startTime ; 

    console.log(`Elapsed Time: ${elapsedTime} ms`) ; 
},2000) ; 