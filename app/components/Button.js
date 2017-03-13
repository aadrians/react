var React = require('react');

var Button = React.createClass({
  getInitialState: function(){
    return ({
      myText: "This is button default text"
    });
  },
  render: function() {
    return (
      <button type="button" onClick={this.handleClick}>
        {this.state.myText}
      </button>
    );
  },
  handleClick: function(){
    this.setState({
      myText: "text changes"
    });
  }
});

module.exports = Button;
