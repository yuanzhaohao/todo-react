define('Footer.react', function () {
  var Footer = React.createClass({
    render: function () {
      var allTodos = this.props.allTodos;
      if (!allTodos.length) {
        return null;
      }
      var total = allTodos.length,
        i = total,
        completed = 0;
      while (i--) {
        if (allTodos[i].complete) {
          completed++;
        }
      }

      var itemsLeft = total - completed,
        itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
      itemsLeftPhrase += 'left';

      // Undefined and thus not rendered if no completed items are left.
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
            <strong>
              {itemsLeft}
            </strong>
            {itemsLeftPhrase}
          </span>
          {clearCompletedButton}
        </footer>
      );
    },

    _onClearCompletedClick: function (e) {
      console.log(e.currentTarget);
    }
  });
  return Footer;
});
