var React = require('react');
var TextInput = require('./TextInput');
var todoActions = require('../widgets/todoActions');

var Header = React.createClass({
  render: function () {
    return (
      <header id="header">
        <h1>todos</h1>
        <TextInput
          id="new-todo"
          placeholder="What needs to be done?"
          onSave={this._onSave}
        />
      </header>
    );
  },

  _onSave: function (text) {
    if (text.trim()) {
      todoActions.create(text.trim());
    }
  }
});

module.exports = Header;
