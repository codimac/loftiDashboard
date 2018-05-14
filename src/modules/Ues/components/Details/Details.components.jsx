import React from 'react';
import Proptypes from 'prop-types';
import store from '@App/App.store';

import ListSubjects from '@Subjects/containers/List.containers';

class Details extends React.Component {

  static propTypes = {
    id: Proptypes.number.isRequired,
    name: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
    // courses: Proptypes.arrayOf(Proptypes.shape({
    //   id: Proptypes.number.isRequired,
    //   name: Proptypes.string.isRequired,
    //   description: Proptypes.string.isRequired
    // })).isRequired
  };

  componentDidMount() {
  }

  render() {
    const { id, name, description } = this.props;

    return (
      <div className="detail mb-2">
        <h1>UE : {name}</h1>
        <p>Desc : {description}</p>
        <div className="courses">
          <ListSubjects subjectId={id} />
        </div>
      </div>
    );
  }

}

export default Details;
