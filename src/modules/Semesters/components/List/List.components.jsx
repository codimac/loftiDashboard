import React from 'react';
import Proptypes from 'prop-types';

class List extends React.Component {

  static propTypes = {
    semesters: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      label: Proptypes.string.isRequired
    })).isRequired,
    getSemestersList: Proptypes.func.isRequired
  };

  componentDidMount() {
    this.props.getSemestersList();
  }

  render() {
    const { semesters } = this.props;

    return (
      <h2>Semesters List Works</h2>
    );
  }

}

export default List;
