
let todolist=[{item: 'buy milk',dueDate:'4/10/2023'},

{item:'go to college',dueDate:'4/10/2023'}];
displayItems();
function addTodo()
{
  let inputEelement=document.querySelector('#todo-input');
  let dateElement=document.querySelector('#todo-date');
  let todoItem=inputEelement.value;
  let todoDate=dateElement.value;
todolist.push({item:todoItem,dueDate:todoDate});
inputEelement.value='';
dateElement.value='';
displayItems();
}
function displayItems()
{
  let containerElement=document.querySelector('.todo-container');
  let newhtml='';
 for(let i=0;i<todolist.length;i++)
  {
   // let item=todolist[i].item;
//let dueDate=todolist[i].dueDate;
let{item,dueDate}=todolist[i];
    newhtml+=`
  
  <span>${item}</span>
  <span>${dueDate}</span>
  <button class="btn-delete" onclick="todolist.splice(${i},1);
  displayItems();">Delete</button>
  
   `;
}
   containerElement.innerHTML=newhtml;
  
}

