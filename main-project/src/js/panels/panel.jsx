import React from 'react';
import ComponentProxy from '../component-proxy.jsx';

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
      textValueTwo: "",
      fred: ""
    };
    this._textBoxOnChange = this._textBoxOnChange.bind(this);
  }

  render() {
    return (
      <div>
        textbox to go here
        <window.JonifenTextbox.Textbox name="textValue" value={this.state.textValue} onChange={this._textBoxOnChange} />
        <br />
        <window.JonifenTextbox.Textbox name="textValueTwo" value={this.state.textValueTwo} onChange={this._textBoxOnChange} />
        <br />
        <input type="text" name="fred" value={this.state.fred} onChange={this._textBoxOnChange} />
        <br />
        <window.JonifenDropdown.Dropdown />
        <ComponentProxy proxy="dropdown" />
      </div>
    );
  }

  _textBoxOnChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
}