var React = require('react');
var todoActions = require('../widgets/todoActions');

var Footer = React.createClass({
  render: function () {
    var allTodos = this.props.allTodos,
      total = Object.keys(allTodos).length;
    if (total === 0) {
      return null;
    }
    var completed = 0;
    for (var k in allTodos) {
      if (allTodos[k].complete) {
        completed++;
      }
    }

    var itemsLeft = total - completed,
      itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
    itemsLeftPhrase += 'left';

    var clearCompletedButton;
    if (completed) {
      clearCompletedButton =
        <button
          id="clear-completed"
          onClick={this._onClearCompletedClick}>
          Clear completed ({completed})
        </button>;
    }

    return (
      <footer id="footer">
        <span id="todo-count">
          <strong>{itemsLeft}</strong>
          {itemsLeftPhrase}
        </span>
        {clearCompletedButton}
      </footer>
    );
  },

  _onClearCompletedClick: function (e) {
    todoActions.destroyCompleted();
  }
});

module.exports = Footer;
