import React from 'react';

class Courses extends React.Component {
  constructor(props) {
    super();
    this.state = props.course;

  }
  render() {
    const course = this.state;
    return (
      <React.Fragment>
        <h3>{course.name}</h3>
        <p> {course.description} </p>
      </React.Fragment>
    );
  }
}

export default Courses;
