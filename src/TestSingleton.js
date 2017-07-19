var singleton =require('./designpatterns/SingletonPattern').singleton;


//var singleton=s.singleton;


var s1=singleton.getInstance({x:40,y:50,z:60});
var s2=singleton.getInstance({x:90,y:90,z:90});

console.log(s1.getX()+"|"+s1.getY()+"|"+s1.getZ());
console.log(s2.getX()+"|"+s2.getY()+"|"+s2.getZ());