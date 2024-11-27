const express = require("express") ;

const users = [{
    name: "John", 
    kidneys: [{
        healthy : false ,
    },{
        healthy: true ,
    }] ,
}] ; 

const app = express() ; 
// adding middlewares to use "req.body". 
app.use(express.json()) ; 

app.get("/",(req,res)=>{
    const johnKidneys = users[0].kidneys ;
    const numberOfKidneys = johnKidneys.length ; 
    let numberOfHealthyKidneys = 0 ; 
    for( let i=0; i<numberOfKidneys ; i++){
        if( johnKidneys[i].healthy )
            numberOfHealthyKidneys += 1 ; 
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys ;
    res.json({
        numberOfKidneys , 
        numberOfHealthyKidneys , 
        numberOfUnhealthyKidneys ,
    }) ;

    console.log(johnKidneys,numberOfKidneys , numberOfHealthyKidneys, numberOfUnhealthyKidneys ) ; 
}); 

app.post("/",(req,res)=>{

    const isHealthy = req.body.isHealthy ;
    users[0].kidneys.push({
        healthy: isHealthy ,
    }) ; 

    res.json({
        message: "Done!" , 
    }) ;
}) ; 

app.put('/',(req,res)=>{
    for(let i=0; i<users[0].kidneys.length ; i++){
        users[0].kidneys[i].healthy = true ; 
    }

    res.json({}) ; // tell the server that the process has been completed. 
}) ;

// removing all the unhealthy kidneys 
app.delete('/',(req,res)=>{
    if( isThereAtleastOneUnhealthyKidney() ){

        const newKidneys = [] ; 
        for(let i=0 ; i<users[0].kidneys.length ; i++){
            if( users[0].kidneys[i].healthy ){
                newKidneys.push({
                    healthy: true , 
                }) ; 
            }
        }

        users[0].kidneys = newKidneys ; 
        res.json({
            message: "Done!" ,
        }) ; 
    }
    else{
        res.status(411).json({
            message: "no unhealthy kidney to convert into healthy kidney" , 
        }); 
    } 
}) ;

function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false; 
    for(let i=0; i<users[0].kidneys.length ; i++){
        if( !users[0].kidneys[i].healthy )
            atleastOneUnhealthyKidney = true;  
    }

    return atleastOneUnhealthyKidney ; 
}

app.listen(3000) ; 

