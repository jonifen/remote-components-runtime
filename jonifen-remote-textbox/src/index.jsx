import React from 'react';

export default class Textbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input type="text" onChange={this.props.onChange} onBlur={this.props.onBlur} value={this.props.value} />
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