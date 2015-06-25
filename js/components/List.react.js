define('List.react',
['Item.react'],
function (Item) {
  var Main = React.createClass({
    render: function () {
      var allTodos = this.props.allTodos,
        todos = [],
        i = allTodos.length,
        item;
      while (i--) {
        item = allTodos[i]
        todos.unshift(<Item key={item.key} todo={item} />);
      }
      return (
        <ul id="todo-list">{todos}</ul>
      );
    }
  });
  return Main;
});
