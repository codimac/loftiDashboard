import React from 'react';

import SelectInput from '@Shared/components/SelectInput/SelectInput.components';

class Form extends React.Component {

  // getPromotion
  // ajout devoir (nom, coeff)
  // ajout notes

  render() {
    const items = [
      {id: 0, value: 'test'},
      {id: 1, value: 'test2'}
    ];

    return (
      <React.Fragment>
        <h1>Form</h1>
        <SelectInput items={items} />
      </React.Fragment>
    );
  }

}

export default Form;
