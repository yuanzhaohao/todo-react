define('Item.react',
['TextInput.react', 'TodoAction'],
function (TextInput, TodoAction) {
  var Item = React.createClass({
    getInitialState: function () {
      return {
        isEditing: false
      };
    },

    render: function () {
      var todo = this.props.todo;
      var cls = this.state.isEditing
        ? 'editing'
        : todo.complete ? 'completed' : '';
      var input;
      if (this.state.isEditing) {
        input =
          <TextInput
            className="edit"
            onSave={this._onSave}
            value={todo.text}
          />
      }
      return (
        <li
          className={cls}
          key={todo.key}
        >
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={todo.complete}
              onChange={this._onToggle}
            />
            <label onDoubleClick={this._onDoubleClick}>{todo.text}</label>
            <button className="destroy" onClick={this._onDestroyClick}></button>
          </div>
          {input}
        </li>
      );
    },

    _onDoubleClick: function (e) {
      this.setState({
        isEditing: true
      });
    },

    _onToggle: function (e) {
      this.setState({
        isEditing: false
      });
      var todo = this.props.todo;
      todo.complete = !todo.complete;
      TodoAction.update(todo);
    },

    _onDestroyClick: function (e) {
      var el = e.currentTarget,
        li = el.parentNode.parentNode,
        ul = li.parentNode;
      TodoAction.destroy(this.props.todo.key);
      if (ul) {
        ul.removeChild(li);
      }
    },

    _onSave: function (text) {
      if (text = text.trim()) {
        var todo = this.props.todo;
        todo.text = text.trim();
        TodoAction.update(todo);
      }
      this.setState({
        isEditing: false
      });
    }
  });
  return Item;
});
