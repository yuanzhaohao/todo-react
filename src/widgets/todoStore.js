var appDispatcher = require('./appDispatcher');
var todoConstants = require('./todoConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var localStorage = window.localStorage;
var localAction = {
  name: 'reactTodos',

  localStorage: function () {
    return localStorage;
  },

  set: function (todos) {
    this.localStorage().setItem(this.name, JSON.stringify(todos));
  },

  get: function () {
    return this.jsonData(this.localStorage().getItem(this.name));
  },

  jsonData: function (data) {
    return data && JSON.parse(data);
  }
};

var _todos = localAction.get() || {};
var EVENT = 'change';

function create (text) {
  var id = +new Date;
  _todos[id] = {
    id: id,
    text: text,
    complete: false
  };
}

function update (id, updates) {
  _todos[id] = assign({}, _todos[id], updates);
}

function updateAll (updates) {
  for (var id in _todos) {
    update(id, updates);
  }
}

function destroy (id) {
  delete _todos[id];
}

function destroyCompleted () {
  for (var id in _todos) {
    if (_todos[id].complete) {
      destroy(id);
    }
  }
}

var todoStore = assign({}, EventEmitter.prototype, {
  getAll: function () {
    localAction.set(_todos);
    return _todos;
  },

  checkAllComplete: function () {
    for (var id in _todos) {
      if (!_todos[id].complete) {
        return false;
      }
    }
    return true;
  },

  emitChange: function () {
    this.emit(EVENT);
  },

  addChangeListener: function (cb) {
    this.on(EVENT, cb);
  },

  removeChangeListener: function (cb) {
    this.removeListener(EVENT, cb);
  }
});


appDispatcher.register(function (action) {
  var text;

  switch (action.actionType) {
    case todoConstants['TODO_CREATE']:
      text = action.text;
      if (text) {
        create(text);
        todoStore.emitChange();
      }
      break;

    case todoConstants['TODO_TOGGLE_COMPLETE_ALL']:
      if (todoStore.checkAllComplete()) {
        updateAll({ complete: false });
      }
      else {
        updateAll({ complete: true });
      }
      todoStore.emitChange();
      break;

    case todoConstants['TODO_TOGGLE_COMPLETE']:
      update(action.todo.id, { complete: !action.todo.complete });
      todoStore.emitChange();
      break;

    case todoConstants['TODO_UPDATE_TEXT']:
      text = action.text.trim();
      if (text) {
        update(action.id, { text: text });
        todoStore.emitChange();
      }
      break;

    case todoConstants['TODO_DESTROY']:
      destroy(action.id);
      todoStore.emitChange();
      break;

    case todoConstants['TODO_DESTROY_COMPLETED']:
      destroyCompleted();
      todoStore.emitChange();
      break;
  }
});

module.exports = todoStore;
