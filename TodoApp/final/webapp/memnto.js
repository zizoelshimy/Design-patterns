import { TodoItem, TodoList  } from "./classes.js";
export const TodoHistory = {
    history: [],
    push(state){
        if(state){
            this.history.push(new Set([...state]));
        }
    },
    Pop(){
        if(this.history.length > 1){
            this.history.pop();
            return this.history.pop();
        }
        return null;
    },
}
const todoList = TodoList.getInstance();
todoList.addObserver(() => {
    TodoHistory.push(todoList.items);
});