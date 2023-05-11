const input = document.getElementById("input");
// console.log("string",input);

const list = document.getElementById("olId");
//console.log("list",list);
     

const addButton = document.getElementById("add");
//console.log("string",addButton);

function handleclick(){
    // console.log("clickme",input.value);
    addListItem(input.value);

}


function addListItem(itemValue){
     
    if( itemValue !== ""){
       
    const li = document.createElement("li");
    li.innerText = itemValue;
    list.appendChild(li);
    }
     


}

// addButton.addEventListener("click",handleclick);  //submit form is taken for clicking and entering so click event is not needed

function removeAllItems(){
   const listItems= document.getElementsByTagName("li");
   console.log(listItems); 
   for(let i=0 ; i<listItems.length ; i++){
       console.log("list item",i);
       listItems[i].remove();
   }
}



const todos = [];
function displayItem(){
    todos.forEach(function(a,b,c){
        addListItem(a);
        console.log("b=",b);
        console.log("c=",c);
    })
}
displayItem();

//localStorage.setItem("name","gayathri")

const form = document.getElementById("form");

form.addEventListener("submit",handlesubmit);


function handlesubmit(event){
      event.preventDefault();
      console.log(event);
      //addListItem(input.value);
      todos.push(input.value);
      input.value ="";
      removeAllItems();
      displayItem();
      
}






