define('Main.react',
['List.react'],
function (List) {
  var Main = React.createClass({
    render: function () {
      if (this.props.allTodos.length < 1) {
        return null;
      }
      var allTodos = this.props.allTodos;

      return (
        <List allTodos={allTodos}/>
      );
    }
  });
  return Main;
});
