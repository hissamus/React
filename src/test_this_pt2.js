//Explicit call


var sayName= function (){

    console.log("My name is "+ this.name);
}

var sayName1= function (){

    console.log("My name is "+ this.name+" and I know  "+ arguments[0]+" & "+arguments[1]+" & "+arguments[2]);
    return 99;
}

var sayName2= function (lang1,lang2,lang3){

    console.log("My name is "+ this.name+" and I know  "+ lang1+" & "+lang2+" & "+lang3);
}

var stacey={
    name:"stacey",
    age:34
};

var languages=["python","java",".net"];

//sayName.call(stacey);
//sayName1.call(stacey,languages[0],languages[1],languages[2] );

//sayName1.call(stacey,languages);
//sayName2.apply(stacey,languages);

var fn= sayName1.bind(stacey,languages[0],languages[1],languages[2] );

console.log("Here");

var vtha=fn();

console.log(vtha);

