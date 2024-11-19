const newTodo = {
  todos: [],
};

const getTodos = () => {
  return newTodo.todos;
};

const addTodo = ({ title }) => {
  newTodo.todos = [
    ...newTodo.todos,
    { id: newTodo.todos.length + 1, title, completed: false },
  ];
};

const toggleTodo = todoId => {
  const todo = newTodo.todos.find(todo => todo.id === todoId);
  todo.completed = !todo.completed;
};

const updateTodo = (todoId, newTitle) => {
  const todo = newTodo.todos.find(todo => todo.id === todoId);
  if (todo) {
    todo.title = newTitle;
  }
};

const removeTodo = todoId => {
  newTodo.todos = newTodo.todos.filter(todo => todo.id !== todoId);
};

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('.input');
  if (input.value.trim() === "") return;
  const title = input.value;
  input.value = '';

  addTodo({ title });
  update();
  console.log(newTodo.todos)
});

const handleCreateTodo = todo => {
  const todoContainer = document.createElement('div');
  todoContainer.classList.add('todoContainer');
  
  const todoSection1 = document.createElement('div');  
  todoSection1.classList.add('todoSection1');

  const todoSection2 = document.createElement("div");
  todoSection2.classList.add("todoSection2");

  const todoInput = document.createElement("input");
  todoInput.classList.add("todo");
  todoInput.value = todo.title;
  todoInput.disabled = true;

  const checkbox = document.createElement('input');
  checkbox.classList.add("checkbox");
  checkbox.type = 'checkbox';
  checkbox.id = `checkbox-todo-${todo.id}`;
  checkbox.checked = todo.completed;
  
  const updateButton = document.createElement("button");
  updateButton.classList.add("updateButton");
  updateButton.type = "button";
  updateButton.innerText = "수정";

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.type = "button";
  deleteButton.innerText = "삭제";
  
  checkbox.addEventListener('click', () => {
    toggleTodo(todo.id);
    update();
  });

  deleteButton.addEventListener('click', () => {
    removeTodo(todo.id);
    update();
  });

  updateButton.addEventListener('click', () => {
    if (todoInput.disabled) {
      todoInput.disabled = false;
      updateButton.innerText = "저장";
    } else {
      updateTodo(todo.id, todoInput.value);
      todoInput.disabled = true;
      updateButton.innerText = "수정";
      update(); 
    }
  });

  todoSection1.append(checkbox);
  todoSection2.append(todoInput, updateButton, deleteButton);
  todoContainer.append(todoSection1, todoSection2);

  return todoContainer;
};

const update = () => {
  const todoUl = document.querySelector('.todoContent');
  const completedUl = document.querySelector('.doneContent');

  todoUl.innerHTML = '';
  completedUl.innerHTML = '';

  const items = getTodos();
  
  items.map(item => 
    item.completed
      ? completedUl.appendChild(handleCreateTodo(item))
      : todoUl.appendChild(handleCreateTodo(item))
  );
};

// 즉시 실행 함수를 이용해 처음 화면 진입시 렌더링
(() => {
  update();
})();
