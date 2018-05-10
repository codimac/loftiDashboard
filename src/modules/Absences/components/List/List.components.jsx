import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

class List extends React.Component {

  static propTypes = {
    getAbsencesList: Proptypes.func.isRequired
  };


  componentDidMount() {
    this.props.getAbsencesList();
  }

  render() {
    return (
      <React.Fragment>
        List
      </React.Fragment>
    );
  }
}

export default List;
