define('Main.react',
['Item.react'],
function (Item) {
  var Main = React.createClass({
    render: function () {
      if (this.props.allTodos.length < 1) {
        return null;
      }
      var allTodos = this.props.allTodos,
        todos = [],
        i = allTodos.length,
        item;

      while (i--) {
        item = allTodos[i]
        todos.unshift(<Item key={item.key} todo={item} />);
      }

      return (
        <section id="main">
          <ul id="todo-list">{todos}</ul>
        </section>
      );
    }
  });
  return Main;
});
