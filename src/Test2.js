function Car(model,year,miles){
    this.model=model;
    this.year=year;
    this.miles=miles;

    this.toString= ()=>{
        return this.model+"|"+this.year+"|"+this.miles;
    }

    

}
var ford= new Car("IKON",2009,20);
var hundai= new  Car("Accent",2009,22);
var honda=  new Car("BRV",2009,21);

console.log(ford.toString());
console.log(hundai.toString());
console.log(honda.toString());