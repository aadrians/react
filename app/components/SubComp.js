var React = require('react');

var SubComp = React.createClass({
  render: function() {
    return (
      <h1>This is SubComp with prop {this.props.myName}</h1>
    );
  }
});

module.exports = SubComp;
