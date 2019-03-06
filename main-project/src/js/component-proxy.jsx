import React from 'react';

export default class ComponentProxy extends React.Component {
  render() {
    var components = {
      "dropdown": require('http://localhost:8082/dist/js/dropdown.umd.js'),
      "textbox": require('http://localhost:8081/dist/js/textbox.umd.js')
    };

    var component = components[this.props.proxy];
    return (
      <component {...this.props} />
    );
  }
}