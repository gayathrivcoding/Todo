const input = document.getElementById("input");
// console.log("string",input);

const list = document.getElementById("olId");
//console.log("list",list);
     

const addButton = document.getElementById("add");
//console.log("string",addButton);

function handleclick(){
    // console.log("clickme",input.value);
    addItem(input.value);

}


function addItem(itemValue){
     
     const li = document.createElement("li");
     li.innerText = itemValue;
     list.appendChild(li);

}

addButton.addEventListener("click",handleclick);



// keyup event 
const myinput = document.getElementById("myinput");
myinput.addEventListener("keyup",handlekeyup);

function handlekeyup(event){

    const target = document.getElementById("target");  //can be avoided
    console.log("myinput",event.target.value);
    target.innerText = event.target.value;


}






