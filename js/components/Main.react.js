define('Main.react',
['List.react'],
function (List) {
  var Main = React.createClass({
    render: function () {
      if (this.props.allTodos.length < 1) {
        return null;
      }
      // var allTodos = this.props.allTodos,
      //   todos = [],
      //   i = allTodos.length,
      //   item;
      // while (i--) {
      //   item = allTodos[i];
      //   todos.unshift(<Item key={item.key} todo={item} />);
      // }
      return (
        <section id="main">
          <input
            id="toggle-all"
            type="checkbox"
            onChange={this._onToggleCompleteAll}
            checked={this.props.areAllComplete ? 'checked' : ''}
          />
          <List allTodos={this.props.allTodos} />
        </section>
      );
    },

    _onToggleCompleteAll: function (e) {
      console.log(e.currentTarget);
    }
  });
  return Main;
});
