// let addBtn = document.querySelector('#add-btn');
// let removeBtn = document.querySelector('#delete-btn');


let btn = document.querySelectorAll('button');
let newTodo = document.querySelector('#new-todo');
let todoList = document.querySelector('.todo-list');

btn.forEach(eve => {
  
  eve.addEventListener('click', (e)=>{
    if(e.target.textContent == 'Add'){
      if(newTodo.value == ''){
        alert('fill the value');
      }else{
        let listItem = document.createElement('li');
        listItem.innerText = newTodo.value;
        todoList.appendChild(listItem);
        newTodo.value = '';
      }
    }else{
      // console.log('re')
      let list = todoList.querySelectorAll('li')
      if(list == true){
        list[0].remove();
      }else{
        alert('fill the value');
      }
    }
  })
});







// addBtn.addEventListener('click', () => {
//   let listItem = document.createElement('li');
//   listItem.innerText = newTodo.value;
//   todoList.appendChild(listItem);
//   newTodo.value = '';
// });

// removeBtn.addEventListener('click', ()=>{
//   let list = todoList.querySelectorAll('li');
//   list[0].remove();
// })