import React from 'react';
import Proptypes from 'prop-types';
import ReactTable from 'react-table';

import './styles';

class StudentDetails extends React.Component {


  static propTypes = {
    getAbsencesList: Proptypes.func.isRequired,
    onClose: Proptypes.func.isRequired,
    absencesList: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      beginning: Proptypes.string.isRequired,
      end: Proptypes.string.isRequired,
      justified: Proptypes.bool.isRequired
    })).isRequired,
    student: Proptypes.shape({
      id: Proptypes.number.isRequired,
      firstname: Proptypes.string.isRequired,
      lastname: Proptypes.string.isRequired,
    }).isRequired,
  };

  constructor() {
    super();
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    this.props.getAbsencesList();
  }

  close() {
    this.props.onClose();
  }

  render() {
    const { student } = this.props;
    const {absencesList} = this.props;
    const justified = '\u2714';
    const notJustified = '\u2716';
    const columns = [
      {Header: 'début ', accessor: 'beginning'},
      {Header: 'fin', accessor: 'end'},
      {Header: 'justifiée', accessor: 'justified', width: 75,
        className: 'centered-col',
        Cell: row => (row.value ? <button onClick={() => this.props.updateAbsencesJustification(row.original.id, false)}> {justified} </button> : <button onClick={() => this.props.updateAbsencesJustification(row.original.id)}> {notJustified} </button>)},
    ];
    const len = absencesList.length;
    return (
      <div className="student-absences">
        <h3> Les absences de {student.firstname} {student.lastname} </h3>
        <section className='alig-items-start'>
          <ReactTable
            defaultPageSize={len}
            data={absencesList}
            noDataText='Aucune absence trouvé.'
            columns={columns}
            showPagination={false}
            className='-highlight'
            resizable={false}
            pageSize={len}
          />
          <button onClick={this.close}>
            Fermer
          </button>
        </section>
      </div>
    );
  }
}


export default StudentDetails;
