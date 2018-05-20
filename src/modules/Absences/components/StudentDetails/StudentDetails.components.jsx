import React from 'react';
import Proptypes from 'prop-types';
import ReactTable from 'react-table';
import { ToastContainer } from 'react-toastify';

import './styles';

class StudentDetails extends React.Component {

  static propTypes = {
    getAbsencesList: Proptypes.func.isRequired,
    updateAbsencesJustification: Proptypes.func.isRequired,
    onClose: Proptypes.func,
    absencesList: Proptypes.arrayOf(Proptypes.shape({
      absence_id: Proptypes.number.isRequired,
      date: Proptypes.string.isRequired,
      justified: Proptypes.oneOfType([Proptypes.bool, Proptypes.number]),
      student_id: Proptypes.number.isRequired,
      username: Proptypes.string.isRequired
    })).isRequired,
    student: Proptypes.shape({
      id: Proptypes.number.isRequired,
      firstname: Proptypes.string.isRequired,
      lastname: Proptypes.string.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    this.props.getAbsencesList(this.props.student.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.student.id !== this.props.student.id) {
      this.props.getAbsencesList(nextProps.student.id);
    }
  }

  /**
   * tell the parent component to close this panel
   */
  close = ev => {
    this.props.onClose();
  }

  render() {
    const { student } = this.props;
    const { absencesList } = this.props;
    const justifiedIcon = '\u2714';
    const notJustifiedIcon = '\u2716';

    return (
      <React.Fragment>
        <ul className="details-container flex justify-content-sb">
          {
            absencesList.map(absence => (
              <li key={absence.absence_id} className="details-li flex-inline align-items-center">
                <h5 className="mr-1"><span>Date : </span>{absence.date}</h5>
                <button className="button button__switch" onClick={() => this.props.updateAbsencesJustification(absence.id, !absence.justified)}> {absence.justified ? justifiedIcon : notJustifiedIcon} </button>
              </li>
            ))
          }

        </ul>
        <ToastContainer />
      </React.Fragment>
    );
  }
}


export default StudentDetails;
