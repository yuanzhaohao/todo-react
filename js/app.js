require(['Todo.react'], function (Todo) {
  React.render(
    <Todo />,
    document.querySelector('#todoapp')
  );
});
