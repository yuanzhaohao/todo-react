define('TextInput.react', function () {
  var TextInput = React.createClass({
    getInitialState: function () {
      return {
        value: this.props.value || ''
      };
    },

    render: function () {
      return (
        <input
          className={this.props.className}
          id={this.props.id}
          placeholder={this.props.placeholder}
          onBlur={this._save}
          onChange={this._onChange}
          onKeyDown={this._onKeyDown}
          value={this.state.value}
          autoFocus={true}
        />
      );
    },

    _save: function () {
      this.props.onSave(this.state.value);
      this.setState({
        value: ''
      });
    },

    _onChange: function (e) {
      this.setState({
        value: e.target.value
      });
    },

    _onKeyDown: function (e) {
      if (e.keyCode === 13) {
        this._save();
      }
    }
  });
  return TextInput;
});
