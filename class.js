const student = {
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