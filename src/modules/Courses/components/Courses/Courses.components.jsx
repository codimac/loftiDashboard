import React from 'react';

class Courses extends React.Component {
  constructor(props) {
    super();
    this.state = props.course;

  }
  render() {
    const course = this.state;
    return (
      <div className="courses">
        <h3>{course.name}</h3>
        <p> {course.description} </p>
      </div>
    );
  }
}

export default Courses;
