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
        console.log("stop");
    }
}

let fortunate=new mifta();