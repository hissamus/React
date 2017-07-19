/*
--  implcicit 
--  explicit
--  new 
--  window
*/


//implcicit

var me={
    name:'tyler',
    age:25,
    sayname:function(){
        console.log(this.name);
    }
}


me.sayname();

var Person=function(name,age){
    return {
        name:name,
        age:age,
        sayName:()=>{
                console.log(this.name);
        },
        mother:{
            name:'stacey'
        }
    }
}

//Expliicit



