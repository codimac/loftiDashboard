import React from 'react';
import Proptypes from 'prop-types';
import ReactTable from 'react-table';

import { Link } from 'react-router-dom';

class Details extends React.Component {

  static propTypes = {
    match: Proptypes.shape({
      params: Proptypes.shape({
        assignmentId: Proptypes.string.isRequired
      }).isRequired
    }).isRequired,
    assignment: Proptypes.shape({
      promotionYear: Proptypes.number,
      semesterId: Proptypes.number,
      ueId: Proptypes.number,
      subjectId: Proptypes.number,
      assignment: Proptypes.shape({
        name: Proptypes.string,
        description: Proptypes.string,
        coefficient: Proptypes.number
      }),
      grades: Proptypes.array.isRequired
    }).isRequired,
    getAssignment: Proptypes.func.isRequired
  };

  componentDidMount() {
    this.props.getAssignment(+this.props.match.params.assignmentId);
  }

  render() {
    const { assignment: {assignment, grades} } = this.props;
    const columns = [
      {Header: 'Elève', accessor: 'lastname', width: 200,
        Cell: row => `${row.original.firstname} ${row.original.lastname}`
      },
      {Header: 'Note', accessor: 'grades',
        Cell: row => row.value
      }
    ];
    return (
      <React.Fragment>
        <h1>{assignment.name}</h1>
        <h2>{assignment.description}</h2>
        <h2>Coefficient: {assignment.coefficient}</h2>
        <Link to={`${this.props.match.params.assignmentId}/edit`}>Editer</Link>

        <div className="flex justify-content-sb">
          <ReactTable
            defaultPageSize={grades.length}
            defaultSorted={[{ id: 'lastname', desc: false }]}
            data={grades}
            noDataText="Aucun élève trouvé."
            columns={columns}
            showPagination={false}
            className="-highlight"
            resizable={false}
            pageSize={grades.length}
          />
        </div>
      </React.Fragment>
    );
  }

}

export default Details;
