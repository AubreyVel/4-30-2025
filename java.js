let add = document.getElementById("add");

let display = document.getElementById("display");
let customers =[];

function Customer(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;

    this.display=function() {
        return `  ---- ${this.name} ---- ${this.age} ---- ${this.email}`;
    }
}

add.onclick = function() {
    
    //validation

    let name = document.getElementById("name");
    let age = document.getElementById("age");
    let email = document.getElementById("email");

    let message = document.getElementById("message");
    let totalQ= document.getElementById("totalQ");

    if(name.value == "" || age.value == "" || email.value == "") 
    {
        //message: All fields must be filled
        message.innerText = "All fields must be filled";
    }
    else 
    {
        let customer = new Customer(name.value, age.value, email.value)
        customers.push(customer);
        totalQ.innerText = "Total in queue: "+customers.length;
    }
}

display.onclick = function() {
    let list = document.getElementById("list");

    let htmlcode = "No ---- Fullname ---- Age ---- Email <br>";

    let order = 1;

    for(let x in customers){
        htmlcode =+ (order++)+ x.display() + "<br>";

    }
    list.innerHTML = htmlcode;

}