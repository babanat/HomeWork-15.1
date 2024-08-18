document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.querySelector('.add-btn');
  const todoList = document.getElementById('todo-list');
  const addMessage = document.querySelector('.add-message');

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.forEach(task => renderTask(task));

  addBtn.addEventListener('click', () => {
      const taskText = addMessage.value.trim();
      if (taskText !== '') {
          const task = { text: taskText, completed: false };
          tasks.push(task);
          renderTask(task);
          saveTasks();
          addMessage.value = '';
      }
  });

  todoList.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
          const taskElement = event.target.parentElement;
          const taskIndex = [...todoList.children].indexOf(taskElement);
          tasks.splice(taskIndex, 1);
          saveTasks();
          taskElement.remove();
      } else if (event.target.type === 'checkbox') {
          const taskElement = event.target.parentElement;
          const taskIndex = [...todoList.children].indexOf(taskElement);
          tasks[taskIndex].completed = event.target.checked;
          saveTasks();
          taskElement.classList.toggle('completed', event.target.checked);
      }
  });

  function renderTask(task) {
      const taskItem = document.createElement('li');
      taskItem.className = `todo-item ${task.completed ? 'completed' : ''}`;
      taskItem.innerHTML = `
          <input type="checkbox" ${task.completed ? 'checked' : ''}>
          <span>${task.text}</span>
          <button>Delete</button>
      `;
      todoList.appendChild(taskItem);
  }

  function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }
});

