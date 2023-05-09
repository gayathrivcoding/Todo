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




const form = document.getElementById("form");

form.addEventListener("submit",handlesubmit);


function handlesubmit(event){
      event.preventDefault();
      console.log(event);
      addListItem(input.value);
      input.value ="";
}





