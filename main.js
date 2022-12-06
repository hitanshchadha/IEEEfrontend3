let addtask = document.getElementById('addtask');
let todocontainer = document.getElementById('todocontainer');
let textbox = document.getElementById('textbox');

addtask.addEventListener('click', function(){
    var paragraph = document.createElement('h2')
    paragraph.innerText = textbox.value;
    
    todocontainer.appendChild(paragraph);
    textbox.value="";
    paragraph.addEventListener('click', function() {
        paragraph.style.backgroundColor='green';
    })
    paragraph.addEventListener('dblclick', function() {
        todocontainer.removeChild(paragraph)})
    })
    

     
 
