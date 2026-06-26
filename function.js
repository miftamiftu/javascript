function mine(){
    console.log("Wlcome my home");
    console.log("helo,i want to learn english");
}
mine();


function myFunction(msg,n){
    console.log(msg);
}
myFunction("sometimes i'm feeling so much bad because i cannot do anything,100");


function sum(x,y){
    console.log(x+y);

}
sum(567,876);

//arrow function
function sum2(a,b){
    return a+b;
}
const arrowSum2 = (a,b) => {
    console.log(a+b);
};

const arrowMul=(c,d)=>{
    console.log(c*d);
};

function countVowels(str){
    let count=0;
    for(const char of str ){
        console.log(char);
        if(char==="a"||char==="e"||char==="i"||char==="O"||char==="u"){
            count++;
        }
    }
    console.log(count)
};


