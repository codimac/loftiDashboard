import React from 'react';
import SelectInput from '@Shared/components/SelectInput/SelectInput.components';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      nbToAdd: 1,
    };
    this.addAbsencesInput = this.addAbsencesInput.bind(this);
    this.deleteAbsencesInput = this.deleteAbsencesInput.bind(this);
  }
  oneAbsence() {
    return (
      <React.Fragment>
        <input type="date" name="date" />
        <label htmlFor="justified"> Justification
          <input id="justified" type="checkbox" name="justified" />
        </label>
        <button onClick={this.deleteAbsencesInput}>X</button>
      </React.Fragment>

    );
  }

  addAbsencesInput() {
    this.setState({nbToAdd: this.state.nbToAdd+1});
  }
  deleteAbsencesInput() {
    if (this.state.nbToAdd > 0) {
      this.setState({nbToAdd: this.state.nbToAdd-1});
    }
  }

  render() {
    const nbAbs = [];
    for (let i = 0; i < this.state.nbToAdd; i++) {
      nbAbs.push(
        <div key={i}>
          {this.oneAbsence()}
        </div>);
    }
    return (
      <React.Fragment>
        <h3>Ajouter une absences </h3>
        {this.oneAbsence()}

        { nbAbs }
        <button onClick={this.addAbsencesInput} >Ajouter une autre absences </button>
        <button type="submit">Enregistrer </button>
      </React.Fragment>

    );
  }

}

export default Form;
