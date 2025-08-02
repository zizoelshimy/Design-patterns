import { ObserverMixin } from './mixin.js'; // Importing the mixin
export class TodoItem{
    constructor(text) {
        this.text = text;
    }
    equals(other) { //value object pattern to cheeck thd duplicate
        return this.text == other.text;
    }
}  
export class TodoList { //Singleton pattern as i need one  instance of TodoList
    constructor(){
        if (TodoList.instance){
            throw new Error("Use TodoList.getInstance() to get the instance.");
        }
    }
    static instance = null; // static property to hold the single instance
    static {
        this.instance = new TodoList();
    }
    static getInstance() {
        return this.instance;
    }

    //data
    #data = new Set(); //# is private field
    get items() {
        return this.#data;
    }
    //list behavior
    add(item){
        const array= Array.from(this.#data);
        const todoExists =array.filter(t=> t.equals(item)).length > 0; //this use the value object pattern to check for duplicates
        if (!todoExists) {
            this.#data.add(item);
            this.notify(); 
        }
        
    }
    delete(todo_text){
        const array= Array.from(this.#data);
        const todoTODelete =array.filter(t=> t.text == todo_text);
        this.#data.delete(todoTODelete[0]); // delete the first found item
        this.notify(); 
    }
    find(todo_text){
        const array= Array.from(this.#data);
        return array.find(t => t.text == todo_text);
    }
    replacelist(list){
        this.#data = list;
        this.notify(); // Notify observers after replacing the list
    }
}
const todoList= TodoList.getInstance();

 // both will be the same instance as we apply Singleton pattern
 //const todoList2= TodoList.getInstance();
 
 //to apply mixin pattern
Object.assign(TodoList.prototype, ObserverMixin); // mixin ObserverMixin into TodoList class