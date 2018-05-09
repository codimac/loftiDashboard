import React from 'react';
import Proptypes from 'prop-types';

import { default as ListCourses } from '@Courses/components/List/List.components';

class Details extends React.Component {

  static propTypes = {
    id: Proptypes.number.isRequired,
    name: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
    courses: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      name: Proptypes.string.isRequired,
      description: Proptypes.string.isRequired
    })).isRequired
  };

  render() {
    const { id, name, description, courses } = this.props;

    return (
      <div className="detail mb-2">
        <h1>UE : {name}</h1>
        <p>Desc : {description}</p>
        <div className="courses">
          <ListCourses courses={courses} />
        </div>
      </div>
    );
  }

}

export default Details;
