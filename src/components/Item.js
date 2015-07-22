var React = require('react');
var TextInput = require('./TextInput');
var todoActions = require('../widgets/todoActions');

var Item = React.createClass({
  getInitialState: function () {
    return {
      isEditing: false
    };
  },

  render: function () {
    var todo = this.props.todo;
    var cls = this.state.isEditing
      ? 'editing'
      : todo.complete ? 'completed' : '';
    var input;
    if (this.state.isEditing) {
      input =
        <TextInput
          className="edit"
          onSave={this._onSave}
          value={todo.text}
        />
    }
    return (
      <li
        className={cls}
        key={todo.id}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.complete}
            onChange={this._onToggle}
          />
          <label onDoubleClick={this._onDoubleClick}>{todo.text}</label>
          <button className="destroy" onClick={this._onDestroyClick}></button>
        </div>
        {input}
      </li>
    );
  },

  _onDoubleClick: function (e) {
    this.setState({
      isEditing: true
    });
  },

  _onToggle: function (e) {
    todoActions.toggleComplete(this.props.todo);
  },

  _onDestroyClick: function (e) {
    todoActions.destroy(this.props.todo.id);
  },

  _onSave: function (text) {
    if (text = text.trim()) {
      todoActions.updateText(this.props.todo.id, text);
    }
    this.setState({
      isEditing: false
    });
  }
});

module.exports = Item;
