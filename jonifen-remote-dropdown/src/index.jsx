import React from 'react';

class DropdownComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>dropdown!</div>
    );
  }
}

export const Component = props => new DropdownComponent(props);