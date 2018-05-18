import React from 'react';
import SelectInput from '@Shared/components/SelectInput/SelectInput.components';

class Form extends React.Component {
  oneAbsence() {
    return (
      <React.Fragment>
        <input type="date" name="date" />
        <label htmlFor="justified"> Justification
          <input id="justified" type="checkbox" name="justified" />
        </label>
      </React.Fragment>

    );
  }


  render() {
    return (
      <React.Fragment>
        <h3>Ajouter une absences </h3>
        {this.oneAbsence()}
        <button onClick={this.oneAbsence} >Ajouter une autre absences </button>
        <button type="submit">Enregistrer </button>
      </React.Fragment>

    );
  }

}

export default Form;
