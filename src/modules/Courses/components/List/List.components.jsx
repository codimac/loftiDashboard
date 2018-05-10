import React from 'react';
import Proptypes from 'prop-types';

import { default as DetailsCourses } from '@Courses/components/Details/Details.components';
import './List.styles';

class List extends React.Component {

  static propTypes = {
    courses: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      name: Proptypes.string.isRequired,
      description: Proptypes.string.isRequired
    })).isRequired
  };

  render() {
    const { courses } = this.props;
    return (
      <div className="list-courses">
        <ul>
          { courses.map(course => (
            <li key={course.id}>
              <DetailsCourses {...course} />
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

export default List;
