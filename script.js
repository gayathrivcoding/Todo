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



