import React from 'react';
import SelectInput from '@Shared/components/SelectInput/SelectInput.components';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      nbToAdd: 1,
      datas: [{date: '', justified: ''}],

    };
    this.addAbsencesInput = this.addAbsencesInput.bind(this);
    this.deleteAbsencesInput = this.deleteAbsencesInput.bind(this);
  }


  oneAbsence(key) {
    return (
      <React.Fragment>
        <input type="date" name="date" onChange={(ev) => this.handleDate(ev, key)} />
        <label htmlFor="justified"> Justification
          <input id="justified" type="checkbox" name="justified" />
        </label>
        <button onClick={this.deleteAbsencesInput}>X</button>
      </React.Fragment>

    );
  }

  handleDate(ev, key) {
    const newDatas = this.state.datas.map((data, id) => {
      if (key !== id) {

        return data;
      }
      return {...data, date: ev.target.value};
    });
    this.setState({datas: newDatas});
  }

  addAbsencesInput() {
    this.setState({
      nbToAdd: this.state.nbToAdd+1,
      datas: this.state.datas.concat([{date: '', justified: ''}])
    });

  }

  deleteAbsencesInput() {
    if (this.state.nbToAdd > 0) {
      this.setState({nbToAdd: this.state.nbToAdd-1});
    }
  }

  prepareSave = () => {
    return 0;
  }

  submit = ev => {
    ev.preventDefault();
    this.prepareSave();
  }

  render() {
    console.log(this.state.datas);

    const nbAbs = [];
    for (let i = 0; i < this.state.nbToAdd; i++) {
      nbAbs.push(
        <div key={i}>
          {this.oneAbsence(i)}
        </div>);
    }
    return (
      <React.Fragment>
        <h3>Ajouter une absences </h3>
        { nbAbs }
        <button onClick={this.addAbsencesInput} >Ajouter une autre absences </button>
        <button type="submit">Enregistrer </button>
      </React.Fragment>

    );
  }

}

export default Form;
