const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']);
Todo.updateOptions({new: true, runValidators: true}); //Traz o registro alterado e força a validação no update

module.exports = Todo;