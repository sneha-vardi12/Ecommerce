import name, {add, multiply} from "./calculator.js";

    const product ={
        
    name: "Laptop",
    price: 1500,
    brcand: "Dell",
    details: function() {
        return `${this.brand} ${this.name} costs ${this.price}`;
    },
};
console.log(product.details());

class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Best friend is ${this.name}`);
    }
}



const sandyy = new person("sandyy",21);
sandyy.greet();

class Student {
    constructor(name, age, college, Id){
        this.name = name;
        this.age = age;
        this.college = college;
        this.Id = Id;
    }
    greet() {
        console.log(`${this.name} ${this.age} ${this.college} ${this.Id}`);
    }
    }

    const snee = new Student("snee",20,"GH Haveri",2001);
    snee.greet();

    const getData =new Promise((resolve, reject) => {
        setTimeout(() =>{
            let sucess = true;
            if (sucess){
                resolve("Data fetched sucessfully!");
            }else{
                reject("Error fetching data");
            }
        }, 2000);
    });

    getData
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

    async function fetchproducts() {
        try{
            let response= await fetch("https://fakestoreapi.com/products");
            let data = await response.json();
            console.log(data);
        }catch (error) {
            console.log("Error fetching data:", error);
        }
    }    

    fetchproducts();