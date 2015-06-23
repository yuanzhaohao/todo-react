define('Todo.react',
['Header.react', 'Main.react', 'TodoAction'],
function (Header, Main, TodoAction) {
  function getTodoState () {
    return {
      allTodos: TodoAction.getAll() || []
    };
  }
  var Todo = React.createClass({
    getInitialState: function () {
      return getTodoState();
    },

    render: function () {
      return <div>
        <Header />
        <Main
          allTodos={this.state.allTodos}
        />
      </div>;
    }
  });
  return Todo;
});
