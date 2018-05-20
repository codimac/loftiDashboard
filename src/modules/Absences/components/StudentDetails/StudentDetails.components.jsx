import React from 'react';
import Proptypes from 'prop-types';
import ReactTable from 'react-table';

import './styles';

class StudentDetails extends React.Component {

  static propTypes = {
    getAbsencesList: Proptypes.func.isRequired,
    updateAbsencesJustification: Proptypes.func.isRequired,
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

  componentDidMount() {
    this.props.getAbsencesList();
  }

  /**
   * tell the parent component to close this panel
   */
  close = ev => {
    this.props.onClose();
  }

  render() {
    const { student } = this.props;
    const {absencesList} = this.props;
    const justified = '\u2714';
    const notJustified = '\u2716';
    // const columns = [
    //   {Header: 'date ', accessor: 'beginning', className: 'centered-col'},
    //   // {Header: 'fin', accessor: 'end'},
    //   {Header: 'justifiée', accessor: 'justified', width: 75,
    //     className: 'centered-col',
    //     Cell: row => (row.value ? <button onClick={() => this.props.updateAbsencesJustification(row.original.id, false)}> {justified} </button> : <button onClick={() => this.props.updateAbsencesJustification(row.original.id)}> {notJustified} </button>)},
    // ];
    const len = absencesList.length;
    return (
      <React.Fragment>
        <ul className="absences-list-container">
          {
            absencesList.map(absence => (
              <li key={absence.id} className="absences-list-item">
                <h5>Date : {absence.beginning}</h5>
                <button className="button button__switch" onClick={() => this.props.updateAbsencesJustification(absence.id, false)}> {absence.justified ? justified : notJustified} </button>
              </li>
            ))
          }

        </ul>
      </React.Fragment>
      // <div className="student-absences">
      //   <section className='alig-items-start'>
      //     <ReactTable
      //       defaultPageSize={len}
      //       data={absencesList}
      //       noDataText='Aucune absence trouvé.'
      //       columns={columns}
      //       showPagination={false}
      //       className='-highlight'
      //       resizable={false}
      //       pageSize={len}
      //     />
      //   </section>
      // </div>
    );
  }
}


export default StudentDetails;
