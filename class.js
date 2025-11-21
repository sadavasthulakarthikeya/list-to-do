/*const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};
const karanArjun = {
    salary : 50000,
};
const karthik = {
    salary : 60000,
};
const sai = {
    salary : 70000,
};

karanArjun.__proto__ = employee;
karthik.__proto__ = employee;
sai.__proto__ = employee;*/
/*class ToyotaCar{
    constructor(brand,mileage) {
        console.log("creating new object.");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}

let fortuner = new ToyotaCar("fortuner",7);
console.log(fortuner);
let lexus = new ToyotaCar("lexus",12);
console.log(lexus);
class person{
    constructor(){
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eat");
    }
}
class engineer extends person{
    constructor(branch){
        super();
        this.branch = branch;
    }
    work(){
        console.log("solving the problems");
    }
}
let engobj = new engineer("chemical engineering");*/
let DATA = "secret information";

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data = ",DATA);
    }
}
class Admin extends User {
    constructor(name, email){
        super(name, email)
    }
    editData() {
        DATA = "some new value";
    }
}
let student1 = new User("karthikeya","karthik@gmail.com");
let student2 = new User("aman", "aman@gmail.com");
let teacher1 = new User("Dean", "dean@gmail.com");

let Admin1 = new User("admin", "admin@collegegmail.com");