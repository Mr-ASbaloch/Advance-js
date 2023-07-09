// function add(a,b) {
//      console.log(a + b); 
// }

// add(1,5);


// call back function 

function  hi() {
    console.log("call back function")
}

function add(a,b ,callback) {
    console.log(a + b); 
    callback 



}

add(1,5 ,hi( function (){
    console.log("welcomes")
}
)

) 
   

add(1,6 )




