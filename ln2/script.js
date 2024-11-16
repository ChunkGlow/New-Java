class information{
 constructor   (name,age,gender,){

this.name = name
this.age = age
this.gender = gender


 }

 age(){

let date = new Date()
return date.getFullYear() - this.age

 }
}

ob1 = new information("Harry",57,"Boy")

document.getElementById("a").innerHTML = "I am  " + ob1.name + "and My age is " + ob1.age + " and My Gender is " + ob1.gender




class Car{

  constructor (brand) {

   this.carname = brand;


  }

    present() {
        return 'I have a ' + this.carname;

    }
}
    class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    

     show() {
    return this.present() + ', it is a ' + this.model;
}
}   

let myCar = new Model("Jeep", "Wrangler");
document.getElementById("details").innerHTML = myCar.show();
