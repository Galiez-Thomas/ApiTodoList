const express = require("express");
const bodyParser = require('body-parser');
const todo = require("./app/queries/todo");
const app = express();
const cors = require('cors')
const PORT = 3000;

app.use(cors())

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get("/", (request, response) => {
    response.json({ info: "Node.js, Express, and Postgres Todo" });
});

app.post("/todo", todo.createTodo);
app.get("/todo", todo.getTodos);
app.delete("/todo", todo.deleteAllTodos);
app.get("/todo/:id", todo.getTodoById);
app.put("/todo/:id", todo.updateTodo);
app.delete("/todo/:id", todo.deleteTodo);

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
});