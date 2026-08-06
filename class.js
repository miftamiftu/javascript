/*const student = {
    fullName: "Miftahul jannat",
    marks:78,
    printMarks:function(){
        console.log("marks=",this.marks);

    },
};

class mifta{
    good(){
        console.log("good");
    }
    stop(){
        console.log("stop");}

        setBrand(brand){
    this.brandName=brand;
    }
}

let fortunate=new mifta();
fortunate.setBrand=("fortunate");

//synchronus
console.log ("one");
console.log ("two");
console.log ("three");




//asynchronus
function hello(){
    console.log("hello");
}
setTimeout(hello,2000);

setTimeout(()=>{
    console.log("mifta");
},4000);//4s=timeout means kotokkhn wait korbr show korar jonne

console.log ("four");
console.log ("five");


//callback
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(3,5,sum);

//promises

let promise=new Promise((resolve,reject)=>{
    console.log("im a promise");
    resolve(123);
    reject("some error");
});

function getData(dataId,getNextdata){
    return new promise
}


const getPromise=()=>{
    return new Promise((resolve,reject)=> {
        console.log("im a promise");
    //resolve("success");
    reject("new error")
});
};
let promise=getPromise();
promise.then((res)=>{
    console.log("fulfilled");

});
promise.catch((err)=>{

console.log("rejected",err);
});

 */
async function getWeather(){
    await getdata (1);
    await getdata (2);
    await getdata (3);
}