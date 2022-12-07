const Todos = require("../models/Todo.model");

module.exports.todosController = {
  getTodos: async (req, res) => {
    try {
      const todo = await Todos.find();
      res.json(todo);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  addTodo: async (req, res) => {
    try {
      const todo = await Todos.create({
        title: req.body.title,
      });
      res.json(todo);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  editTodo: async (req, res) => {
    try {
      const todo = await Todos.findByIdAndUpdate(
        req.params.id,
        {
          completed: req.body.completed,
        },
        { new: true }
      );
      res.json(todo);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  removeTodo: async(req, res) => {
    try {
        const todo = await Todos.findByIdAndDelete(req.params.id)
        res.json(todo)
    } catch(error) {res.json({ error: error.message });}
  }
};
