import React from 'react';
import Proptypes from 'prop-types';

class Form extends React.Component {
  static propTypes = {
    createAbsences: Proptypes.func.isRequired,
    student: Proptypes.shape({
      id: Proptypes.number.isRequired,
      firstname: Proptypes.string.isRequired,
      lastname: Proptypes.string.isRequired,
    }).isRequired,
  }

  constructor() {
    super();
    this.state = {
      datas: [{date: '', justified: 'false'}],
    };
    this.addAbsencesInput = this.addAbsencesInput.bind(this);
    this.deleteAbsencesInput = this.deleteAbsencesInput.bind(this);
  }

  /**
   * render one row of input for one absence
   * @param {object} data row data
   * @param {int} key key of the row
   */
  oneAbsence(data, key) {
    return (
      <div key={key}>
        <input type="date" value={data.date} name="date" onChange={(ev) => this.handleDate(ev, key)} />
        <label htmlFor="justified"> Justification
          <input id="justified" value={data.justified} type="checkbox" name="justified" onChange={(ev) => this.handleJustified(ev, key)} />
        </label>
        <button onClick={(ev) => this.deleteAbsencesInput(ev, key)}>X</button>
      </div>
    );
  }

  /**
   * on change handler for date
   * @param {object} ev event object
   * @param {int} key key of the row being modified
   */
  handleDate(ev, key) {
    const newDatas = this.state.datas.map((data, id) => {
      if (key !== id) {
        return data;
      }
      return {...data, date: ev.target.value};
    });
    this.setState({datas: newDatas}, () => this.validForm());
  }

  /**
   * on change handler for justified
   * @param {object} ev event object
   * @param {int} key key of the row being modified
   */
  handleJustified(ev, key) {
    const newDatas = this.state.datas.map((data, id) => {
      if (key !== id) {
        return data;
      }
      return {...data, justified: ev.target.checked};
    });
    this.setState({datas: newDatas}, () => this.validForm());
  }

  /**
   * add an input dynamically to the form
   * @param {object} ev event object
   */
  addAbsencesInput(ev) {
    ev.preventDefault();
    this.setState({
      datas: this.state.datas.concat([{date: '', justified: ''}])
    },
    () => this.validForm());
  }

  /**
   * delete an input
   * @param {object} ev event object
   * @param {int} key key of the row being deleted
   */
  deleteAbsencesInput(ev, key) {
    ev.preventDefault();
    if (this.state.datas.length > 0) {
      this.setState({
        datas: this.state.datas.filter((data, id) => key !== id)
      });
    }
  }

  /**
   * validate conformity of the datas
   */
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
      const {student} = this.props;
      const {datas} = this.state;
      const datasToSend = { ...student, absences: datas};
      console.log(datasToSend);
      this.props.createAbsences(datasToSend);
    }
  }

  render() {
    return (
      <React.Fragment>
        <h3>Ajouter une absences </h3>
        <form onSubmit={this.submit} >
          {
            this.state.datas.map((data, id) => this.oneAbsence(data, id))
          }
          <button onClick={this.addAbsencesInput} >Ajouter une autre absences </button>
          <button type="submit" disabled={!this.state.validForm}>Enregistrer </button>
        </form>
      </React.Fragment>

    );
  }

}

export default Form;
