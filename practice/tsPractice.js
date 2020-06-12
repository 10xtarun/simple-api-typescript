//installing typescript "npm install -g typescript"
//declaration
var a = 5;
var b = 12;
var c = a + b;
console.log(c);
/*Data Types */
/*any type */
var myVar = "This is a string!";
/*built in types */
var num = 5;
var myName = 'Tarun';
var isPresent = true;
/*User Defined Types*/
//enum, class, interface, array and tuple
/*OOP */
var Car = /** @class */ (function () {
    //initialize constructor
    function Car(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    //method
    Car.prototype.displayMake = function () {
        console.log("This car is " + this.model);
    };
    return Car;
}());
//instantiate
var Baleno = new Car('Baleno', 4, false);
Baleno.displayMake();
/*Reusing the signature of interface */
var Kar = {
    model: 'Prius',
    make: 'Toyota',
    display: function () { console.log("Hello, Welcome to the interface!"); }
};
