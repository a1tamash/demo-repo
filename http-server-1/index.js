const express = require("express") ; 
const bodyParser = require("body-parser") ; 
// const port = 3000 ; 
const port = process.env.PORT || 3000 ; 

const app = express() ; 
app.use(bodyParser.json()) ;  // can also use " app.use(express.json()) ; "

// app.get('/', (req,res) => {
//     res.send("Hello World , I don't understand why it is not running. Otherwise my name's Altamash.") ;
//     res.send("I will become a 100x developer") ; 
// }) ; 

app.get('/',(req,res)=>{
    res.send("Hello World , this is Altamash and I'm workng very hard.") ;
})

app.post('/',(req,res)=>{
    console.log(req.headers.authorization) ; 
    const message = req.body.message ; 
    console.log(message) ;
    console.log(req.body) ;
    res.send({
        "message": "2 + 2 = 4 " ,
    }) ; 
}) ;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`) ; 
}) ; 