import React from 'react';
import Proptypes from 'prop-types';

class Form extends React.Component {
  static propTypes = {
    createAbsences: Proptypes.func.isRequired
  }
  constructor() {
    super();
    this.state = {
      datas: [{date: '', justified: 'false'}],
    };
    this.addAbsencesInput = this.addAbsencesInput.bind(this);
    this.deleteAbsencesInput = this.deleteAbsencesInput.bind(this);
  }

  oneAbsence(data, key) {
    return (
      <React.Fragment>
        <input type="date" value={data.date} name="date" onChange={(ev) => this.handleDate(ev, key)} />
        <label htmlFor="justified"> Justification
          <input id="justified" value={data.justified} type="checkbox" name="justified" onChange={(ev) => this.handleJustified(ev, key)} />
        </label>
        <button onClick={(ev) => this.deleteAbsencesInput(ev, key)}>X</button>
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
    this.setState({datas: newDatas}, () => this.validForm());
  }

  handleJustified(ev, key) {
    const newDatas = this.state.datas.map((data, id) => {
      if (key !== id) {
        return data;
      }
      return {...data, justified: ev.target.checked};
    });
    this.setState({datas: newDatas}, () => this.validForm());
  }

  addAbsencesInput(ev) {
    ev.preventDefault();
    this.setState({
      datas: this.state.datas.concat([{date: '', justified: ''}])
    },
    () => this.validForm());
  }

  deleteAbsencesInput(ev, key) {
    ev.preventDefault();
    if (this.state.datas.length > 0) {
      this.setState({
        datas: this.state.datas.filter((data, id) => key !== id)
      });
    }
  }

  validForm() {
    const {datas} = this.state;
    const error = datas.every(value => value.date.length !== 0);
    this.setState({
      validForm: error
    });
  }

  submit = ev => {
    ev.preventDefault();
    this.validForm();
    if (this.state.validForm) {
      this.props.createAbsences(this.state.datas);
    }
  }

  render() {
    return (
      <React.Fragment>
        <h3>Ajouter une absences </h3>
        <form onSubmit={this.submit} >
          {
            this.state.datas.map((data, id) => <div> {this.oneAbsence(data, id)} </div>)
          }
          <button onClick={this.addAbsencesInput} >Ajouter une autre absences </button>
          <button type="submit" disabled={!this.state.validForm}>Enregistrer </button>
        </form>
      </React.Fragment>

    );
  }

}

export default Form;
