class Todo {
  constructor() {
    this.list = [];
  }

  add(todo) {
    this.list.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.list.length) {
      this.list.splice(indexOfTodo, 1);
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.list.length) {
      this.list[index] = updatedTodo;
    }
  }

  getAll() {
    return this.list;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.list.length) {
      return this.list[indexOfTodo];
    }
    return null;
  }

  clear() {
    this.list.splice(0, this.list.length);
  }
}

module.exports = Todo;
