import { TodoList } from './classes.js';
import { TodoItem } from './classes.js';
import { TodoHistory } from './memnto.js';
export class Command {
    name;
    args;
    constructor(name, args) {
        this.name = name;
        this.args = args;
    }
}
//like an enum for command types
export const Commands={
    ADD: 'ADD',
    DELETE: 'DELETE',
    UNDO: 'UNDO',
}
export const CommandExcuter={
    exute(command){
         const todoList = TodoList.getInstance();
       switch (command.name) {
  case Commands.ADD:  // ✅ Correct
    const todoInput = globalThis.DOM.todoInput;
    const todoText = todoInput.value.trim();
    const itemToAdd = todoList.find(todoText);
    if (todoText && itemToAdd === undefined) {
      todoInput.value = ""; // Clear input field
      todoList.add(new TodoItem(todoText));
    }
    break;

  case Commands.DELETE:  // ✅ Correct
    const [textToDelete] = command.args;
    todoList.delete(textToDelete);
    break;
  case Commands.UNDO:  // ✅ Correct
    const perviousList = TodoHistory.Pop();
    if (perviousList) {
        todoList.replacelist(perviousList);
    }
    break;  
  default:
    throw new Error(`Unknown command: ${command.name}`);
}

            }
            
    }


