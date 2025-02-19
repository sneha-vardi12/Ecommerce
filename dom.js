//Selecting by ID
const title = document.getElementById("title");
console.log(title);
console.log(title.textContent);

//Selecting by Class
const paragraphs = document.getElementsByClassName("description");
console.log(paragraphs);
console.log(paragraphs[0].textContent);

//Selecting by Tag name
const listItems = document.getElementsByTagName("li");
console.log(listItems);
console.log(listItems[0].textContent);

//using querySelector
const firstParagraph = document.querySelector(".description");
console.log(firstParagraph);
console.log(firstParagraph.textContent);

//using querySelectorAll
const allListItems = document.querySelectorAll("li");
console.log(allListItems);
allListItems.forEach((item) => console.log(item.textContent));

const title1 = document.getElementById("title");
title.textContent = "updated DOM Title";
title.style.color = "white";
title.style.backgroundColor = "green";
title.classList.add("something");

const list = document.getElementById("list");
const newItem = document.createElement("li");
newItem.textContent = "Item 3";
list.appendChild(newItem);

const firstItem = document.querySelector("#list li");
list.insertBefore(newItem, firstItem);

const button = document.getElementById("btn");

function sayHello()  {
    let name = prompt("To-Do-List");
    console.log("Hello");

   if (name){
     alert( ` Hello ${name}` );
    }else{
        alert("no name entered");
   }

    //if(name) {
       // const isConfirmed = confirms(`Did you typed, $(name) ?`);
       // if(isConfirmed){
       //     console.log("hello, ($name)");
     //   } else {
        //    console.log("Try again");
      //  }
   // }  else {
       //     alert("No name entered");
 //}
}

button.addEventListener("click", sayHello);

//button.removeEventListener("click", sayHello);

localStorage.setItem("username","sandyy");
console.log(localStorage.getItem("username"));
localStorage.removeItem("username");
localStorage.clear();

sessionStorage.setItem("sandyy","snee1225");
console.log(sessionStorage.getItem("sandyy"));
sessionStorage.removeItem("sandyy");

const user = {name:"sandyy",age:21};
localStorage.setItem("user",JSON.stringify(user));

const storeUser=JSON.parse(localStorage.getItem("user"));
console.log(storeUser.name);