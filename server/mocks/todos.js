module.exports = function(app) {
  var express = require('express');
  var todosRouter = express.Router();
  todosRouter.get('/', function(req, res) {
    res.send({"/todos":[]});
  });
  app.use('/api/todos', todosRouter);
};
