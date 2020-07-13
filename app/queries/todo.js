const pool = require("../db/connexion");

const getTodos = (request, response) => {
    pool.query('SELECT * FROM todo ORDER BY id ASC', (error, result) => {
        if (error) {
            throw error;
        }
        response.status(200).json(result.rows);
    });
};

const getTodoById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query(`SELECT * FROM todo WHERE id = ${id}`, (error, result) => {
        if (error) {
            throw error;
        }
        response.status(200).json(result.rows);
    })
};

const createTodo = (request, response) => {
    const {task} = request.body;

    pool.query(`INSERT INTO todo (task) VALUES ('${task}')`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Todo added with ID: ${results.insertID}`);
    })
};

const deleteTodo = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query(`DELETE FROM todo WHERE id = ${id}`, (error, result) => {
        if (error) {
            throw error;
        }
        response.status(200).json(result.rows);
    })
};

const deleteAllTodos = (request, response) => {
    pool.query(`DELETE FROM todo`, (error, result) => {
        if (error) {
            throw error;
        }
        response.status(200).json(result.rows);
    })
};

const updateTodo = (request, response) => {
    const id = parseInt(request.params.id);
    const {task} = request.body;

    pool.query(
        'UPDATE todo SET task = $1 WHERE id = $2',
        [task, id],
        (error) => {
          if (error) {
            throw error
          }
          response.status(200).send(`Todo modified with ID: ${id}`)
        }
      );
    };

module.exports = {
    getTodos,
    getTodoById,
    createTodo,
    deleteTodo,
    deleteAllTodos,
    updateTodo
};