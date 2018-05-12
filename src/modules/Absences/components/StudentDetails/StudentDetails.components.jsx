import React from 'react';
import Proptypes from 'prop-types';

class StudentDetails extends React.Component {

  componentDidMount() {
    this.props.getAbsencesList(this.props.student.id);
  }

  render() {
    console.log(this.props);
    const {student} = this.props;
    return (
      <div>
        Les absences de {student.firstname} {student.lastname}
      </div>
    );
  }
}


export default StudentDetails;
