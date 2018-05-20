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

    return (
      <React.Fragment>
        <ul className="details-container flex justify-content-sb">
          {
            absencesList.map(absence => (
              <li key={absence.id} className="details-li flex-inline align-items-center">
                <h5 className="mr-1"><span>Date : </span>{absence.beginning}</h5>
                <button className="button button__switch" onClick={() => this.props.updateAbsencesJustification(absence.id, !absence.justified)}> {absence.justified ? justified : notJustified} </button>
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
