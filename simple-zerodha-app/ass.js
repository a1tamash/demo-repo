let counter = 5 ; 

const countdown = setInterval( () => {
    console.log(counter) ; 
    counter -= 1;  

    if( counter == 0 ){
        clearInterval(countdown) ; 
        console.log("Countdown Complete") ; 
    }
},1000) ; 

