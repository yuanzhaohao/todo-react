define('Header.react',
['List.react', 'Item.react', 'TextInput.react', 'TodoAction'],
function (List, Item, TextInput, TodoAction) {
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
        TodoAction.create({
          key: +new Date,
          text: text,
          complete: false
        });
        React.render(<List allTodos={TodoAction.getAll()} />, document.querySelector('#main'));
      }
    }
  });
  return Header;
});
