import React from 'react';

class TextboxComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input type="text" onChange={this.props.onChange} onBlur={this.props.onBlur} value={this.props.value} name={this.props.name} />
    );
  }

  _onChange(e) {
    if (this.props.onChange)
      this.props.onChange(e);
  }

  _onBlur(e) {
    if (this.props.onBlur)
      this.props.onBlur(e);
  }
}

export const Textbox = prop => new TextboxComponent(prop);