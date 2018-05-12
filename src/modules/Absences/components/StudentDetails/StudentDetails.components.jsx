import React from 'react';
import Proptypes from 'prop-types';
import ReactTable from 'react-table';

class StudentDetails extends React.Component {

  componentDidMount() {
    this.props.getAbsencesList();
  }

  render() {
    const { student } = this.props;
    const {absencesList} = this.props;
    console.log(absencesList);
    const columns = [
      {Header: 'début ', accessor: 'beginning'},
      {Header: 'fin', accessor: 'end'},
      {Header: 'justifiée', accessor: 'justified', width: 75, className: 'centered-col'}
    ];
    const len = absencesList.length;
    return (
      <div>
        <h3> Les absences de {student.firstname} {student.lastname} </h3>
        <section className="alig-items-start">
          <ReactTable
            defaultPageSize={len}
            data={absencesList}
            noDataText="Aucune absence trouvé."
            columns={columns}
            showPagination={false}
            className="-highlight"
            resizable={false}
            pageSize={len}
          />
        </section>
      </div>
    );
  }
}


export default StudentDetails;
