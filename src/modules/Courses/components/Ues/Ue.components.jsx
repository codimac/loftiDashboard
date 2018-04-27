import React from 'react';
import Courses from '../Courses/Courses.components';
import ListCourses from '../Courses/ListCourses.components';


class Ue extends React.Component {
  constructor(props) {
    super();
    this.state = props.ue;

  }

  render() {
    const ue = this.state;
    return (
      <div className='ue'>
        <h2> UE {ue.name} </h2>
        <ListCourses courses={ue.courses} />
      </div>
    );
  }
}

export default Ue;
