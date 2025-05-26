
function addTodo() {
  const input = document.getElementById('todoInput');
  const task = input.value.trim();
  if (task === '') return;

  const li = document.createElement('li');
  li.textContent = task;

  li.onclick = () => li.remove();

  document.getElementById('todoList').appendChild(li);
  input.value = '';
}
