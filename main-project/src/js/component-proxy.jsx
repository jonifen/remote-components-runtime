import React from 'react';
import ScriptJs from 'scriptjs';

export default class ComponentProxy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Component: null,
      error: null
    };

    this.components = {
      "dropdown": { name: 'jonifenDropdown', url: 'http://localhost:9000/js/jonifenDropdown.umd.js' },
      "textbox": { name: 'jonifenTextbox', url: 'http://localhost:9000/js/jonifenTextbox.umd.js' }
    };
  }

  componentDidMount() {
    let componentData = this.components[this.props.type];

    ScriptJs(componentData.url, () => {
      let target = window[componentData.name];
      if (target) {
        this.setState({
          error: null,
          Component: target.Component
        });
      } else {
        this.setState({
          error: `Cannot load component at ${componentData.url}`,
          Component: null
        });
      }
    });
  }

  render() {
    if (this.state.Component)
      return <this.state.Component name={this.props.name} {...this.props.props} />
    else if (this.state.error)
      return <p>{this.state.error}</p>
    else
      return this.props.children;
  }
}