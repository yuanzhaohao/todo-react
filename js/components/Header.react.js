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
        var todo = {
          key: +new Date,
          text: text,
          complete: false
        };
        TodoAction.create(todo);

        var allTodos = TodoAction.getAll(),
          todos = [],
          i = allTodos.length,
          item;
        while (i--) {
          item = allTodos[i];
          todos.unshift(<Item key={item.key} todo={item} />);
        }
        React.render(<List allTodos={todos} />, document.querySelector('#todo-list'));
      }
    }
  });
  return Header;
});
