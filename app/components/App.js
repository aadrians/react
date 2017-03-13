var React = require('react');
var SubComp = require('./SubComp');
var Button = require('./Button');
var ButtonComp = require('./ButtonComp');
//var ButtonCompES6 = require('./ButtonCompES6');

import ButtonCompES6 from './ButtonCompES6';

var App = React.createClass({
  render: function() {
    return (
      <div className="shopping-list">
        <h1>Super-component</h1>
        <SubComp myName="custom name"/>
        <Button />
        <ButtonComp />
        <ButtonCompES6 />
      </div>
    );
  }
});

module.exports = App;
