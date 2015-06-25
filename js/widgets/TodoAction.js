define('TodoAction', function () {
  var localStorage = window.localStorage;
  var TodoAction = {
    name: 'reactTodos',
    store: function (todos) {
      this.localStorage().setItem(this.name, JSON.stringify(todos));
    },

    create: function (todo) {
      var todos = this.getAll();
      todos.unshift(todo)
      this.store(todos);
    },

    getAll: function () {
      return this.jsonData(this.localStorage().getItem(this.name)) || [];
    },

    localStorage: function () {
      return localStorage;
    },

    jsonData: function (data) {
      return data && JSON.parse(data);
    },

    update: function (todo) {
      var todos = this.getAll(),
        i = todos.length;
      while (i--) {
        if (todo.key === todos[i].key) {
          todos[i] = todo;
          break;
        }
      }
      this.store(todos);
    },

    destroy: function (key) {
      var todos = this.getAll(),
        i = todos.length;
      while (i--) {
        if (key ===  todos[i].key) {
          todos.splice(i, 1);
          break;
        }
      }
      this.store(todos);
    },

    checkAllComplete: function () {
      var todos = this.getAll(),
        i = todos.length;
      while (i--) {
        if (todos[i].complete === false) {
          return false;
        }
      }
      return true;
    }
  };

  return TodoAction;
});
