import React from 'react';

class SelectInput extends React.Component {

  render() {
    const { items } = this.props;
    return (
      <select>
        { items.map(item => (
          <option key={item.id} value={item.id}>{item.value}</option>
        ))}
      </select>
    );
  }

}

export default SelectInput;
