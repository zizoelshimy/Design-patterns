//MIXIN that will implement Obserever pattern
//the idea of mixin that i will create a bahavior that can be used in any class and inject it into any class
export const ObserverMixin = {
    observers: new Set(),
    addObserver(observer) {this.observers.add(observer);},
    removeObserver(observer) {this.observers.delete(observer);},
    notify() {this.observers.forEach(obs => obs());}
}
  