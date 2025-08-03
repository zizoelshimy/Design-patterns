# Design-patterns

## TodoApp Design Patterns

The `TodoApp` project demonstrates several classic design patterns in JavaScript:

### 1. Singleton Pattern

- **File:** `TodoApp/final/webapp/classes.js`
- **Usage:** The `TodoList` class is implemented as a Singleton, ensuring only one instance of the todo list exists throughout the application. Access is provided via `TodoList.getInstance()`.

### 2. Mixin & Observer Pattern

- **File:** `TodoApp/final/webapp/mixin.js`, used in `classes.js`
- **Usage:** The `ObserverMixin` provides observer pattern behavior as a mixin, allowing any class to add, remove, and notify observers. `TodoList` uses this to notify UI and storage updates when the list changes.

### 3. Memento Pattern

- **File:** `TodoApp/final/webapp/memnto.js`
- **Usage:** The `TodoHistory` object implements the Memento pattern, storing snapshots of the todo list state to support undo functionality.

### 4. Command Pattern

- **File:** `TodoApp/final/webapp/command.js`
- **Usage:** The `Command` class and `CommandExcuter` object encapsulate actions (add, delete, undo) as command objects, decoupling UI events from business logic.

---

This project is a practical demonstration of how to combine multiple design patterns to build a modular, maintainable JavaScript application.

---

## CoffeeMasters Design Patterns

The `CoffeeMasters` project showcases several design patterns and techniques to enhance performance, maintainability, and user experience:

### 1. Lazy Load Pattern

- **Usage:** Components and data are loaded only when needed, improving initial load time and resource usage.

### 2. View Transition Pattern

- **Usage:** Smooth transitions between different views/pages are implemented to enhance the user experience.

### 3. HTML Interpolation

- **Usage:** Dynamic content is rendered in the UI using HTML interpolation, allowing for flexible and interactive interfaces.

These patterns are applied throughout the `CoffeeMasters/final` directory, especially in the `components` and `services` folders.
