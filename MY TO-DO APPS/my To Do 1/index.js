var container =[];
function todoList() {
    var userInput = document.getElementById("todoInput").value;
    if(userInput===''){
        alert("Input cannot be empty");
        return;
    }
    for (let i = container.length-1; i <container.length; i--) {
        console.log(i);
    
        if (userInput === container[i]) {
                alert("The same hobby already exists!");
                return;
        }
        
    }
    
    container.shift(userInput);
    var element = document.createElement("li");
    // var text = document.createTextNode(userInput);
    // element.appendChild(text);
    element.textContent=userInput; // Works as line 19 & 20 combo
    // console.log(container);
    
    var parentElement = document.getElementById("todoList");
     parentElement.appendChild(element); 
    // parentElement.insertBefore(element,todoList.firstElementChild);

    



     // container.forEach(function(contain){
    //     if (userInput == contain) {
    //                 alert("The same hobby already exists!");
    //                 return;
    //             }
    // })


}  
