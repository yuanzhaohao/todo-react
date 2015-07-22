var React = require('react');
var Header = require('./Header');
var Main = require('./Main');
var Footer = require('./Footer');
var todoStore = require('../widgets/todoStore');

function getTodoState () {
  return {
    allTodos: todoStore.getAll(),
    areAllComplete: todoStore.checkAllComplete()
  };
}

var Todo = React.createClass({
  getInitialState: function () {
    return getTodoState();
  },

  componentDidMount: function () {
    todoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    todoStore.removeChangeListener(this._onChange);
  },

  render: function () {
    return (
      <div>
        <Header />
        <Main
          allTodos={this.state.allTodos}
          areAllComplete={this.state.areAllComplete}
        />
        <Footer allTodos={this.state.allTodos} />
      </div>
    );
  },

  _onChange: function () {
    this.setState(getTodoState());
  }
});

module.exports = Todo;
