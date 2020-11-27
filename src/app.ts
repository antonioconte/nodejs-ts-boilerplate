import Todo from "./entities/Todo";
import Todos from "./entities/Todos";

let a: Todo = new Todo("Go to the Gym");
let b: Todo = new Todo("Go to the School");
let c: Todo = new Todo("Go to the Market");

let box: Todos = new Todos([a, b, c]);

console.log(box);
