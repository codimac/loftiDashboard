import React from 'react';
import Courses from './Courses.components';
import './courses.styles';

class ListCourses extends React.Component {
  constructor(props) {
    super();
    this.state = props;
  }


  renderList() {
    const { courses } = this.state;

    return (
      <React.Fragment>
        {courses.map(course => (
          <Courses key={course.id} course={course} />
        ))}
      </React.Fragment>
    );
  }
  render() {
    return (
      <div className="list-courses">
        {this.renderList()}
      </div>
    );
  }
}

export default ListCourses;
