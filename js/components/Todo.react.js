define('Todo.react',
['Header.react', 'Main.react', 'Footer.react', 'TodoAction'],
function (Header, Main, Footer, TodoAction) {
  function getTodoState () {
    return {
      allTodos: TodoAction.getAll() || [],
      areAllComplete: TodoAction.checkAllComplete()
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
          areAllComplete={this.state.areAllComplete}
        />
        <Footer allTodos={this.state.allTodos} />
      </div>;
    }
  });
  return Todo;
});
