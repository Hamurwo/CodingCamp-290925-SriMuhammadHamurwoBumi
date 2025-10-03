let todos = [];

function renderTodos(list) {
  const tbody = document.getElementById("todoList");
  tbody.innerHTML = "";
  if (list.length === 0) {
    tbody.innerHTML = '<tr><td colspan="3">Belum ada tugas.</td></tr>';
    return;
  }
  list.forEach((todo, index) => {
    const row = `<tr>
                    <td>${todo.task}</td>
                    <td>${todo.date}</td>
                    <td><button class="delete-btn" onclick="deleteTodo(${index})">Hapus</button></td>
                </tr>`;
    tbody.innerHTML += row;
  });
}

function addTodo() {
  const task = document.getElementById("todoInput").value;
  const date = document.getElementById("dateInput").value;
  if (task === "" || date === "") {
    alert("Harap isi tugas dan tanggal batas!");
    return;
  }
  todos.push({ task, date });
  renderTodos(todos);
  document.getElementById("todoInput").value = "";
  document.getElementById("dateInput").value = "";
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos(todos);
}

function clearAll() {
  todos = [];
  renderTodos(todos);
}

function filterTodo() {
  const filterValue = document.getElementById("filterDate").value;
  if (filterValue === "") {
    renderTodos(todos);
    return;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let filtered = [];

  if (filterValue === "today") {
    filtered = todos.filter((todo) => {
      const todoDate = new Date(todo.date);
      todoDate.setHours(0, 0, 0, 0);
      return todoDate.getTime() === today.getTime();
    });
  } else if (filterValue === "upcoming") {
    filtered = todos.filter((todo) => {
      const todoDate = new Date(todo.date);
      todoDate.setHours(0, 0, 0, 0);
      return todoDate.getTime() > today.getTime();
    });
  } else if (filterValue === "past") {
    filtered = todos.filter((todo) => {
      const todoDate = new Date(todo.date);
      todoDate.setHours(0, 0, 0, 0);
      return todoDate.getTime() < today.getTime();
    });
  }

  renderTodos(filtered);
}

renderTodos(todos);
