var React = require('react');
var Item = require('./Item');
var todoActions = require('../widgets/todoActions');

var Main = React.createClass({
  render: function () {
    if (this.props.allTodos.length < 1) {
      return null;
    }
    var allTodos = this.props.allTodos,
      todos = [],
      item;
    for (var k in allTodos) {
      todos.push(<Item key={allTodos[k].id} todo={allTodos[k]} />);
    }
    return (
      <section id="main">
        <input
          id="toggle-all"
          type="checkbox"
          onChange={this._onToggleCompleteAll}
          checked={this.props.areAllComplete ? 'checked' : ''}
        />
        <ul id="todo-list">{todos}</ul>
      </section>
    );
  },

  _onToggleCompleteAll: function (e) {
    todoActions.toggleCompleteAll();
  }
});

module.exports = Main;
