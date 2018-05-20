import React from 'react';
import Proptypes from 'prop-types';

import { default as DetailsSubjects } from '@Subjects/components/Details/Details.components';
import './List.styles';

class List extends React.Component {

  static propTypes = {
    subjectId: Proptypes.number,
    getSubjectsListForUe: Proptypes.func.isRequired,
    subjects: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      name: Proptypes.string.isRequired,
      description: Proptypes.string.isRequired
    })).isRequired
  };

  componentDidMount() {
    this.props.getSubjectsListForUe(this.props.subjectId);
  }

  render() {
    const { subjects } = this.props;
    return (
      <div className="list-courses">
        <ul>
          { subjects.map(subject => (
            <li key={subject.id}>
              <DetailsSubjects {...subject} />
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

export default List;
