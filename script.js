document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');

  form.addEventListener('submit', (event) => {
      event.preventDefault();

      const task = input.value.trim();

      if (task) {
          addTask(task);
          input.value = '';
      }
  });

  function addTask(task) {
      const listItem = document.createElement('li');
      listItem.textContent = task;
      list.appendChild(listItem);
  }
});
