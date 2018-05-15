import React from 'react';
import Proptypes from 'prop-types';
import ReactTable from 'react-table';

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
                ue.subjects.map(subject => {
                  const columns = [
                    {Header: 'Devoir', accessor: 'name', width: 150,
                      Cell: row => <Link to={`assignments/${row.original.id}`}>{row.value}</Link>
                    },
                    {Header: 'Description', accessor: 'description',
                      Cell: row => row.value
                    },
                    {Header: 'Edition', accessor: 'id',
                      Cell: row => <Link to={`assignments/${row.value}/edit`}>Editer</Link>
                    }
                  ];
                  return (
                    <React.Fragment key={subject.id}>
                      <h2>{subject.name}</h2>
                      <ReactTable
                        defaultPageSize={subject.assignments.length}
                        data={subject.assignments}
                        columns={columns}
                        noDataText="Aucun élève trouvé."
                        showPagination={false}
                        className="-highlight"
                        resizable={false}
                        pageSize={subject.assignments.length}
                        sortable={false}
                      />
                    </React.Fragment>

                    // <article className='subject' key={subject.id}>
                    //   <h2>Matière: {subject.name}</h2>
                    //   {
                    //     subject.assignments.map(assignment => (
                    //       <ul key={assignment.id}>
                    //         <li className='link link__black'>
                    //
                    //         </li>
                    //       </ul>
                    //     ))
                    //   }
                    // </article>
                  );
                })
              }
            </section>
          ))
        }
      </div>
    );
  }

}

export default List;
