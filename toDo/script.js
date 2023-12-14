const form = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const template = (todo) => {
  //   const today = new Date();
  //   const time =
  //     today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  //     <span class="date">${time}</span>
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>

  </li>

  `;
  list.innerHTML += html;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.querySelector(".add input");
  let todo = input.value.trim();
  if (todo.length) {
    template(todo);
    form.reset();
  }
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
