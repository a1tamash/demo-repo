/* 
    1. Get Express.
    2. Create Express Object.
    3. Listen to Express Object. 
*/

const express = require("express") ; 

const app = express() ; 

function sum(n){
    let ans = 0 ;
    for(let i=1; i<=n ; i++)
        ans += i ; 

    return ans ; 
}

app.get('/',(req,res)=>{
    const n = req.query.n ; 
    const ans = sum(n) ; 
    res.send("The value of the answer is " + ans ) ;
}) ; 


app.listen(3000) ;
