import React from 'react';
import Proptypes from 'prop-types';

import { Link } from 'react-router-dom';

class List extends React.Component {

  static propTypes = {
    getAssignmentsList: Proptypes.func.isRequired,
    assignments: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      name: Proptypes.string.isRequired,
      subjects: Proptypes.arrayOf(Proptypes.shape({
        id: Proptypes.number.isRequired,
        name: Proptypes.string.isRequired,
        assignments: Proptypes.arrayOf(Proptypes.shape({
          id: Proptypes.number.isRequired,
          description: Proptypes.string.isRequired,
          coefficient: Proptypes.number.isRequired
        })).isRequired
      })).isRequired
    })).isRequired
  };

  componentDidMount() {
    this.props.getAssignmentsList();
  }

  render() {
    const { assignments } = this.props;

    return (
      <div>
        {
          assignments.map(ue => (
            <section className='ue' key={ue.id}>
              <h1>{ue.id} - {ue.name}</h1>
              {
                ue.subjects.map(subject => (
                  <article className='subject' key={subject.id}>
                    <h2>Matière: {subject.name}</h2>
                    {
                      subject.assignments.map(assignment => (
                        <ul key={assignment.id}>
                          <li className='link link__black'>
                            <Link to={`assignments/${assignment.id}`}>{assignment.name}</Link>
                          </li>
                        </ul>
                      ))
                    }
                  </article>
                ))
              }
            </section>
          ))
        }
      </div>
    );
  }

}

export default List;
