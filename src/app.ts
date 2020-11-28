import restana from 'restana';
import bodyParser from 'body-parser';
import Todo from './entities/Todo';
import Todos from './entities/Todos';
import { strict } from 'assert';

const PORT: number = 3000;
const service: restana.Service<any> = restana({});
service.use(bodyParser.json());

let a: Todo = new Todo('TEST 1');
let b: Todo = new Todo('TEST 2');
let c: Todo = new Todo('TEST 3');
let box: Todos = new Todos([a, b, c]);

service.get('/todo', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(box);
});

service.get('/todo/:id', function (req, res) {
  const { id } = req.params;
  res.setHeader('Content-Type', 'application/json');
  res.send(box.getItem(parseInt(id)));
});

service.post('/todo', function (req, res) {
  // request body: { text: "TEXT NEW POST" }
  const text = req.body['text'];
  let todo = new Todo(text);
  box.addItem(todo);
  res.setHeader('Content-Type', 'application/json');
  res.send(todo);
});
service.start(PORT).then(() => console.log('[SERVER] running on port ' + PORT));
