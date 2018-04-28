import React from 'react';

class Promos extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      label: '2018',
      students: [
        {id: 1, name: 'Mary', surname: 'Sue', uersname: 'marysue'}
      ]

    };
  }

  render() {
    const {students} = this.state;
    const promos = this.state;
    return (
      <React.Fragment>
        {students.id}
        {promos.label}
      </React.Fragment>
    );
  }
}

export default Promos;
