import React from 'react';
import Proptypes from 'prop-types';

class Details extends React.Component {

  static propTypes = {
    id: Proptypes.number.isRequired,
    name: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired
  };

  render() {
    const { id, name, description } = this.props;

    return (
      <div className="courses">
        <h3>{name}</h3>
        <p> {description} </p>
      </div>
    );
  }
}

export default Details;
