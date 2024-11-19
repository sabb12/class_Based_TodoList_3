class Todo {
  constructor(id, title, completed = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}

class TodoApp {
  constructor() {
    this.todos = [];
    this.init();
  }

  addTodo(title) {
    const newTodo = new Todo(this.todos.length + 1, title);
    this.todos.push(newTodo);
    this.update();
        console.log(newTodo)
  }
  getTodos() {
    return this.todos;
  }

  toggleTodo(todoId) {
    const todo = this.todos.find(todo => todo.id === todoId);
    if (todo) {
      todo.completed = !todo.completed;
      this.update();
    }
  }

  updateTodo(todoId, newTitle) {
    const todo = this.todos.find(todo => todo.id === todoId);
    if (todo) {
      todo.title = newTitle;
      this.update();
    }
  }

  removeTodo(todoId) {
    this.todos = this.todos.filter(todo => todo.id !== todoId);
    this.update();
  }

  createLi(todo) {
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
    checkbox.checked = todo.completed;

    const updateButton = document.createElement("button");
    updateButton.classList.add("updateButton");
    updateButton.type = "button";
    updateButton.innerText = "수정";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.type = "button";
    deleteButton.innerText = "삭제";

    checkbox.addEventListener('click', () => this.toggleTodo(todo.id));
    deleteButton.addEventListener('click', () => this.removeTodo(todo.id));

    updateButton.addEventListener('click', () => {
      if (todoInput.disabled) {
        todoInput.disabled = false;
        updateButton.innerText = "저장";
      } else {
        this.updateTodo(todo.id, todoInput.value);
        todoInput.disabled = true;
        updateButton.innerText = "수정";
      }
    });

    todoSection1.append(checkbox);
    todoSection2.append(todoInput, updateButton, deleteButton);
    todoContainer.append(todoSection1, todoSection2);

    return todoContainer;
  }

  update() {
    const todoUl = document.querySelector('.todoContent');
    const completedUl = document.querySelector('.doneContent');

    todoUl.innerHTML = '';
    completedUl.innerHTML = '';

    this.getTodos().forEach(item => 
      item.completed
        ? completedUl.appendChild(this.createLi(item))
        : todoUl.appendChild(this.createLi(item))
    );
  }

  init() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.querySelector('.input');
      if (input.value.trim() === "") return;
      this.addTodo(input.value);
      input.value = '';
    });

    this.update();
  }
}

new TodoApp();
