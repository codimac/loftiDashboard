import React from 'react';
import Ue from './Ue.components';
import './ues.styles.scss';

class ListUe extends React.Component {
  constructor() {
    super();
    // when you fake data ... but the ugly way.
    this.state= {
      ues: [
        {id: 'ue1', name: 'Design et Médias numériques', description: 'boum ba da boum', courses: [
          {id: '1', name: 'coucou', description: 'hop hop hop'},
          {id: '2', name: 'test', description: 'hip hip hip'}
        ]},
        {id: 'ue2', name: 'Culture et entreprise I', description: 'boum ba da boum 2', courses: [
          {id: '1', name: 'hello', description: 'hap hap hap'},
          {id: '2', name: 'world', description: 'hep hep hep'}
        ]}
      ]
    };
  }

  /**
   * TODO :
   * récup les datas, les VRAIS <3
   * les filtres
   */
  render() {
    const { ues } = this.state;
    return (
      <div className='list-ues'>
        {ues.map(ue => <Ue key={ue.id} ue={ue} />)}
      </div>
    );
  }
}

export default ListUe;
