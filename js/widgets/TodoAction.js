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

    updateText: function (key, text) {
      var todos = this.getAll(),
        i = todos.length;
      while (i--) {
        if (key === todos[i].key) {
          todos[i].text = text;
          break;
        }
      }
      this.store(todos);
    },

    destroy: function (key) {
      var todos = this.getAll(),
        i = todos.length,
        todo, k;
      while (i--) {
        todo = todos[i];
        if (key === todo.key) {
          k = i;
          break;
        }
      }
      if (typeof k !== undefined) {
        todos.splice(k, 1);
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
