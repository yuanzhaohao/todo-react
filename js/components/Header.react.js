define('Header.react',
['TextInput.react', 'Item.react', 'TodoAction'],
function (TextInput, Item, TodoAction) {
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
      if (text = text.trim()) {
        var todo = {
          key: +new Date,
          text: text,
          complete: false
        };
        TodoAction.create(todo);
        // React.render(<Item todo={todo} />, document.querySelector('#todo-list'));
      }
    }
  });
  return Header;
});
