import React from 'react';
import Courses from './Courses.components';

class Ue extends React.Component {

  renderCourses() {
    return (
      <React.Fragment>
        <Courses />
      </React.Fragment>
    );
  }
  render() {
    return (
      <React.Fragment>
        <h2> nom UE </h2>
        {this.renderCourses()}
      </React.Fragment>
    );
  }
}

export default Ue;
