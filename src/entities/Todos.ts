import Todo from "./Todo";

export default class Todos {
    private todoList: Todo[];

    constructor(todoList = []) {
        this.todoList = todoList;
    }

    addItem(todo: Todo) : void {
        this.todoList.push(todo)
    }

    getItem(index: number) : Todo {
        return index > this.todoList.length ? null : this.todoList[index - 1]
    }

    toString(): Todo[] {
        return this.todoList;
    }
}
