const person = [ "harkirat" , "raman" , "kirat" ] ; 

console.log(person[0]) ;
console.log(person[1]) ;
console.log(person[2]) ;


const res = [ 1 , 102 , 4 , 5 , 100 ] ; 


let len = arr.length; 

let ans = Number.MIN_SAFE_INTEGER ; 


for(let i=0; i<res.length ; i++){
    ans = Math.max(ans,res[i]) ; 
}

console.log(ans) ; 



const users = [
    {
        firstName: "Altamash" , 
        gender: "male" , 
    },{
        firstName: "Raman" , 
        gender: "female" , 
    },{
        firstName: "Priya" , 
        gender: "male" ,
    }
] ; 

for( let i=0 ; i<users.length ; i++){
    if( users[i]["gender"] == "male" ){
        console.log(users[i]["firstName"]) ; 
    }
}

let arr = [ 1 , 2 , 3 , 4 , 5 ] ;

for( let i=0 ; i<arr.length ; i++){
    console.log(arr[i]) ; 
}

let low = 0 , high = arr.length-1 ; 

while( low < high ){
    let temp = arr[low] ; 
    arr[low] = arr[high] ; 
    arr[high] = temp ;

    low += 1 , high -= 1;  
}

for( let i=0 ; i<arr.length ; i++){
    console.log(arr[i]) ; 
}