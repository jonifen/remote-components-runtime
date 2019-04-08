import React from 'react';
import ComponentProxy from '../component-proxy.jsx';

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._textBoxOnChange = this._textBoxOnChange.bind(this);
  }

  render() {
    return (
      <div>
        <ComponentProxy type="dropdown" name="jonifenTest" props={{name: "fred"}}>
          Loading...
        </ComponentProxy>
        <ComponentProxy type="textbox" name="jonifenText" props={{value: this.state.jonifenText, onChange: this._textBoxOnChange}}>
          Loading...
        </ComponentProxy>
        <ComponentProxy type="textbox" name="jonifenText2" props={{value: this.state.jonifenText2, onChange: this._textBoxOnChange}}>
          Loading...
        </ComponentProxy>
        <ComponentProxy type="textbox" name="jonifenText3" props={{value: this.state.jonifenText3, onChange: this._textBoxOnChange}}>
          Loading...
        </ComponentProxy>
      </div>
    );
  }

  _textBoxOnChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    // this.setState({ textValue: e.target.value });
  }
}