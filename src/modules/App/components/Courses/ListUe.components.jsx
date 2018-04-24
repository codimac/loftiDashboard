import React from 'react';
import Ue from './Ue.components';

class ListUe extends React.Component {
  constructor() {
    super();
    // when you fake data ... but the ugly way.
    this.test = {
      ues: [
        {id: 'ue1', name: 'dessin', description: 'boum ba da boum', courses: [
          {id: '1', name: 'coucou'},
          {id: '2', name: 'test'}
        ]},
        {id: 'ue2', name: 'dessin 2', description: 'boum ba da boum 2', courses: [
          {id: '1', name: 'hello'},
          {id: '2', name: 'world'}
        ]}
      ]
    };
  }

  /**
   * TODO :
   * récup les datas
   * les filtres
   */
  renderList() {
    const { ues } = this.test;

    return (
      <React.Fragment>
        {ues.map(ue => <Ue key={ue.id} />)}
      </React.Fragment>
    );

    // return (
    //   <React.Fragment>
    //     <Ue />
    //   </React.Fragment>
    // );
  }
  render() {
    return (
      <React.Fragment>
        {this.renderList()}
      </React.Fragment>
    );
  }
}

export default ListUe;
