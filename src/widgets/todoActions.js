var todoConstants = require('./todoConstants');
var appDispatcher = require('./appDispatcher');

var todoActions = {
  create: function (text) {
    appDispatcher.dispatch({
      actionType: todoConstants['TODO_CREATE'],
      text: text
    });
  },

  updateText: function (id, text) {
    appDispatcher.dispatch({
      actionType: todoConstants['TODO_UPDATE_TEXT'],
      id: id,
      text: text
    });
  },

  toggleComplete: function (todo) {
    appDispatcher.dispatch({
      actionType: todoConstants['TODO_TOGGLE_COMPLETE'],
      todo: todo
    });
  },

  toggleCompleteAll: function () {
    appDispatcher.dispatch({
      actionType: todoConstants['TODO_TOGGLE_COMPLETE_ALL']
    });
  },

  destroy: function (id) {
    appDispatcher.dispatch({
      actionType: todoConstants['TODO_DESTROY'],
      id: id
    });
  },

  destroyCompleted: function () {
    appDispatcher.dispatch({
      actionType: todoConstants['TODO_DESTROY_COMPLETED']
    });
  }
};

module.exports = todoActions;
