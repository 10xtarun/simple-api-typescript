//installing typescript "npm install -g typescript"

//declaration
let a = 5;
let b = 12;
let c = a + b;
console.log(c);

/*Data Types */
/*any type */
let myVar:any = "This is a string!"

/*built in types */
let num: number = 5;
let myName: string = 'Tarun';
let isPresent: boolean = true;

/*User Defined Types*/
//enum, class, interface, array and tuple

/*OOP */
class Car {
    //fields
    model: String;
    doors: Number;
    isElectric: Boolean;
    //initialize constructor
    constructor(model: String, doors: Number, isElectric: Boolean){
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    //method
    displayMake(): void {
        console.log(`This car is ${this.model}`);

    }
}

//instantiate
const Baleno = new Car('Baleno', 4, false);
Baleno.displayMake();

/*Interface */
interface ICar {
    model: String;
    make: String;
    display(): void;
}

/*Reusing the signature of interface */
const Kar: ICar = {
    model: 'Prius',
    make: 'Toyota',
    display()  { console.log("Hello, Welcome to the interface!");}
}