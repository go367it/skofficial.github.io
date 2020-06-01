//selectors
const todoinput= document.querySelector(".todo-input");
const todobutton= document.querySelector(".todo-button");
const todolist= document.querySelector(".todo-list");

const todo1input= document.querySelector(".todo1-input");
const todo1button= document.querySelector(".todo1-button");
const todo1list= document.querySelector(".todo1-list");

//event listeners
todobutton.addEventListener("click", addtodo);

todo1button.addEventListener("click", addtodo1);

todolist.addEventListener("click", deletecheck);
todo1list.addEventListener("click", deletecheck1);
//functions
function addtodo(event){
event.preventDefault();

//todo div
const todoDiv = document.createElement('div');
todoDiv.classList.add("todo");
//create li
const newtodo = document.createElement('li');
newtodo.innerText = todoinput.value;
newtodo.classList.add('todo-item');
todoDiv.appendChild(newtodo);
//check mark button
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-file-upload"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);
//check trash button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);
//append todo list
todolist.appendChild(todoDiv);
//clear todo input value
todoinput.value= "";
}

function deletecheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
        todo.remove();
        });
    }
    if(item.classList[0] === "complete-btn"){
      const todo = item.parentElement;
      todo.classList.toggle("completed");
  }
  }



function addtodo1(event){
    event.preventDefault();
    
    //todo div
    const todo1Div = document.createElement('div');
    todo1Div.classList.add("todo1");
    //create li
    const newtodo1 = document.createElement('li');
    newtodo1.innerText = todo1input.value;
    newtodo1.classList.add('todo1-item');
    todo1Div.appendChild(newtodo1);
    //check mark button
    const completed1Button = document.createElement('button');
    completed1Button.innerHTML = '<i class="fas fa-check"></i>';
    completed1Button.classList.add("complete1-btn");
    todo1Div.appendChild(completed1Button);
    //check trash button
    const trash1Button = document.createElement('button');
    trash1Button.innerHTML = '<i class="fas fa-trash"></i>';
    trash1Button.classList.add("trash1-btn");
    todo1Div.appendChild(trash1Button);
    //append todo list
    todo1list.appendChild(todo1Div);
    //clear todo input value
    todo1input.value= "";
    }

   

      function deletecheck1(f){
        const item1 = f.target;
        //delete todo
        if(item1.classList[0] === "trash1-btn"){
            const todo1 = item1.parentElement;
            //animation
            todo1.classList.add('fall1');
            todo1.addEventListener('transitionend', function(){
            todo1.remove();
            });
        }
        if(item1.classList[0] === "complete1-btn"){
          const todo1 = item1.parentElement;
          todo1.classList.toggle("completed1");
      }
      }
