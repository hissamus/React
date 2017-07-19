//import {myModule as m} from './designpatterns/ModulePattern';

var moduleP= require ("./designpatterns/ModulePattern");
const m= moduleP.myModule;
const n= moduleP.myModule;

m.setAge(10);
m.setName("Ahan");

m.setAge(100);
m.setName("ZZZZZZZZ");


console.log(m.getDescription());
console.log(n.getDescription());
