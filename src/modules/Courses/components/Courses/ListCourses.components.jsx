import React from 'react';
import Courses from './Courses.components';
import './courses.styles';

class ListCourses extends React.Component {
  constructor(props) {
    super();
    this.state = props;
  }

  render() {
    const { courses } = this.state;
    return (
      <div className="list-courses">
        {courses.map(course => (
          <Courses key={course.id} course={course} />
        ))}
      </div>
    );
  }
}

export default ListCourses;
