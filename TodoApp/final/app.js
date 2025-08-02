import { TodoList } from "./webapp/classes.js";
import { CommandExcuter } from "./webapp/command.js";
import { Command,Commands } from "./webapp/command.js";
import { LocalStorage } from "./webapp/storage.js";
globalThis.DOM={}
function renderList(){
     DOM.todoList.innerHTML = ""; // Clear the list before rendering
     const lists=TodoList.getInstance();
     for(let todo of lists.items) {
          const listItem = document.createElement("li");
          listItem.classList.add("todo-item");
          listItem.innerHTML=`
          ${todo.text}
          <button class="delete-btn">Delete</button>
          `;
          listItem.dataset.text = todo.text; // Store the text in a data attribute
          DOM.todoList.appendChild(listItem);
     }
}
const DOM=globalThis.DOM;
document.addEventListener('DOMContentLoaded', function() {
     DOM.todoList = document.getElementById("todo-list");
     DOM.todoInput = document.getElementById("todo-input");
     DOM.addBtn = document.getElementById("add-btn");
     DOM.addBtn.addEventListener("click", function() {
     const cmd = new Command(Commands.ADD, [DOM.todoInput.value.trim()]);
     CommandExcuter.exute(cmd);
     });
     DOM.todoList.addEventListener("click", function(event) {
      if (event.target.classList.contains("delete-btn")) {
          const listItem = event.target.closest(".todo-item");
          const cmd = new Command(Commands.DELETE, [listItem.dataset.text]);
          CommandExcuter.exute(cmd);
      }
     });
    renderList();
     TodoList.getInstance().addObserver(renderList);
});
document.addEventListener('DOMContentLoaded', () => {
    // Load existing todos from localStorage
   LocalStorage.load();
});
// design pattern help me to add shortcut key to add todo easily 
document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'p') {
        event.preventDefault(); // Prevent default print behavior
        const cmd = new Command(Commands.ADD, [DOM.todoInput.value.trim()]);
        CommandExcuter.exute(cmd);
    }
    if (event.ctrlKey && event.key === 'z') {
        const cmd = new Command(Commands.UNDO);
        CommandExcuter.exute(cmd);
    }
});