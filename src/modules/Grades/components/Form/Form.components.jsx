import React from 'react';

import SelectInput from '@Shared/components/SelectInput/SelectInput.components';

class Form extends React.Component {

  // getAllPromotions
  // select a prom and get All Pr
  // ajout devoir (nom, coeff)
  // ajout notes

  change = ev => {
    console.log(ev.target.value);
  }

  render() {
    const items = [
      {id: 0, value: 'test', label: 'test'},
      {id: 1, value: 'test2', label: 'test2'}
    ];

    return (
      <React.Fragment>
        <h1>Form</h1>
        <SelectInput items={items} placeholder="Sélectionner une promotion" onChange={this.change} />
      </React.Fragment>
    );
  }

}

export default Form;
