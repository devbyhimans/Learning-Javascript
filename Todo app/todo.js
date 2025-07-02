let todoList=[];
let completedList=[];

let doneList=localStorage.getItem('completedList');
let taskList=localStorage.getItem('todoList');

if(taskList)
todoList=JSON.parse(taskList);

if(doneList)
completedList=JSON.parse(doneList);

displayItems();
completedContent();

function addTodo() {
    let input = document.querySelector('#Task');
    let dateInput = document.querySelector('#TaskDate');
    let date = dateInput.value ;
    let task = input.value;

    if (task !== "" && date!="") {
        todoList.push({ item: task, dueDate: date });
        input.value = '';
        dateInput.value = ''; // <-- Corrected line
        displayItems();
        localStorage.setItem('todoList',JSON.stringify(todoList));
    }
}

function displayItems(){
   let contItem= document.querySelector('.taskcontainer');
 
   let newTask='';

   for(let i=0;i<todoList.length;i++){
    // let taskName=todoList[i].item;
    // let taskDate=todoList[i].dueDate;
    let{item,dueDate}=todoList[i];
    
    newTask+=`
    <span>${item}</span>
     <span>${dueDate}</span>
    <button  class="complete" onclick="completedTask(${i})">Completed</button>
    <button class="del-btn" onclick="remove('todoList',${i}); localStorage.setItem('todoList',JSON.stringify(todoList));
    displayItems();
">Delete</button> 
    `
   }
   contItem.innerHTML=newTask;
}
function remove(listType, index){
    if(listType === 'todoList'){
        todoList.splice(index,1);
        localStorage.setItem('todoList', JSON.stringify(todoList));
        displayItems();
    } else if(listType === 'completed'){
        completedList.splice(index,1);
        localStorage.setItem('completedList', JSON.stringify(completedList));
        completedContent();
    }
}

function completedTask(indx) {
    let doneObj = todoList.splice(indx, 1)[0]; // Remove and get the whole object [0] makes sure we get object if we remove it we get and array and would push array in the completed list
    completedList.push(doneObj); // Store the whole object in completedList
    localStorage.setItem('todoList', JSON.stringify(todoList)); // Update todoList in storage
    localStorage.setItem('completedList', JSON.stringify(completedList)); // Update completedList in storage
    displayItems(); // Refresh the UI
    completedContent();
}

function completedContent(){

    let completedCont=document.querySelector('.completedContainer');
    let newcontent=''
      for(let i=0;i<completedList.length;i++){
        
        let{item}=completedList[i];

        newcontent+=`
        <span>${item}</span>
        <button  class="remove" onclick="remove('completed',${i})">Remove</button>
        `
      }
      completedCont.innerHTML=newcontent;
}
function clearing(){
    localStorage.clear() ;
    todoList = [];
    completedList = [];
    displayItems();
    completedContent();
}