import React from 'react';

class Promos extends React.Component {
  constructor() {
    super();
    this.state = {
      promos: {id: 1, label: '2018'},
      students: this.createFakeStudents(35)

    };
  }

  createFakeStudents(number = 2) {
    const students = Array(number);
    for (let i = 0; i < students.length; i++) {
      students[i] = {id: i, name: 'name'+i, surname: 'surname'+i, uersname: 'username'+i}
    }
    return students;
  }

  render() {
    const {students} = this.state;
    const {promos} = this.state;
    // students part wil be moved to ListStudents component soon.
    return (
      <React.Fragment>
        <h2> Promo {promos.label} </h2>
        {students.map(student => (
          <li key={student.username}>
            {student.name} {student.surname} {student.username}
          </li>)
        )}
      </React.Fragment>
    );
  }
}

export default Promos;
