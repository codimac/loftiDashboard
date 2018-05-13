import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import store from '@App/App.store';

import { getPromotion } from '@Promos/reducers/details.reducers';

import * as promotionsDetailsEffects from '@Promos/effects/details.effects';
import * as semestersListEffects from '@Semesters/effects/list.effects';
import * as uesListEffects from '@Ues/effects/list.effects';

import SelectInput from '@Shared/components/SelectInput/SelectInput.components';

class Form extends React.Component {

  static propTypes = {
    year: Proptypes.number.isRequired,
    promotion: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      firstname: Proptypes.string.isRequired,
      lastname: Proptypes.string.isRequired,
      username: Proptypes.string.isRequired
    })).isRequired,
    semesters: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      label: Proptypes.string.isRequired
    })).isRequired,
    ues: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      name: Proptypes.string.isRequired,
      description: Proptypes.string.isRequired
    })).isRequired,
    match: Proptypes.shape({
      params: Proptypes.shape({
        promotionId: Proptypes.string.isRequired,
        assignmentId: Proptypes.string
      }).isRequired
    }).isRequired,
    createSubjectWithGrades: Proptypes.func.isRequired
  };

  constructor() {
    super();
    this.state = {
      isEditing: null,
      promotionId: null,
      selectedSemester: null,
      selectedUE: null,
      selectedCourse: null,
      validForm: false,
      subject: {},
      grades: {}
    };
  }

  componentWillMount() {
    this.setState({
      isEditing: !!+this.props.match.params.assignmentId,
      promotionId: +this.props.match.params.promotionId
    });
  }

  componentDidMount() {
    if (this.state.promotionId !== getPromotion(store.getState()).year) {
      store.dispatch(promotionsDetailsEffects.getPromotion(this.props.match.params.promotionId));
    }
    if (this.state.isEditing) {
      console.log('TO DO');
    }

    store.dispatch(semestersListEffects.getSemesterForPromo(this.props.match.params.promotionId));
  }

  selectSemester = ev => {
    this.setState({selectedSemester: +ev.target.value});
    store.dispatch(uesListEffects.getUesListFromSemester(this.state.selectedSemester));
  }

  selectUE = ev => {
    this.setState({selectedUE: +ev.target.value});
  }

  selectCourse = ev => {
    this.setState({selectedCourse: +ev.target.value});
  }

  parsedPromotions = promotions => {
    return promotions.map(promo => {
      return {
        ...promo,
        value: promo.label
      };
    });
  }

  parsedSemesters = semesters => {
    return semesters.map(semester => ({
      ...semester,
      value: semester.id
    }));
  }

  parsedUes = ues => {
    return ues.map(ue => ({
      ...ue,
      value: ue.id,
      label: ue.name
    }));
  }

  parsedCourses = ues => {
    return ues.find(ue => ue.id === this.state.selectedUE).courses.map(course => ({
      ...course,
      value: course.id,
      label: course.name
    }));
  }

  handleSubjectChange = ev => {
    this.setState({
      subject: {
        ...this.state.subject,
        [ev.target.name]: ev.target.value
      }
    }, () => this.validForm());
  }

  handleGradeChange = ev => {
    this.setState({
      grades: {
        ...this.state.grades,
        [ev.target.name]: +ev.target.value
      }
    }, () => this.validForm());
  }

  prepareSave = () => {
    const subjectWithGrades = {
      promotionYear: this.props.year,
      semesterId: this.state.selectedSemester,
      ueId: this.state.selectedUE,
      courseId: this.state.selectedCourse,
      subject: {
        ...this.state.subject,
        coefficient: +this.state.subject.coefficient,
      },
      grades: this.state.grades
    };
    this.props.createSubjectWithGrades(subjectWithGrades);
  }

  submit = ev => {
    ev.preventDefault();
    this.prepareSave();
  }

  validForm = () => {
    const { subject, grades } = this.state;
    const subjectValues = Object.values(subject);
    const gradesValues = Object.values(grades);
    this.setState({
      validForm: subjectValues.length === 3 && subjectValues.every(value => value.length !== 0) &&
        gradesValues.length !== 0 && gradesValues.every(grade => grade !== 0)
    });
  }

  render() {
    const { year, promotion, semesters, ues } = this.props;
    const columns = [
      {Header: 'Elève', accessor: 'firstname', width: 200,
        Cell: row => `${row.original.firstname} ${row.original.lastname}`
      },
      {Header: 'Note', width: 200,
        Cell: row => (
          <input type="number" placeholder="Note" min={0} step="any" name={`${row.original.id}`} onChange={this.handleGradeChange} />
        )
      }
    ];

    return (
      <React.Fragment>
        <h1>Form</h1>
        <h2>La promo sélectionnée est { year }</h2>

        <SelectInput items={this.parsedSemesters(semesters)} placeholder='Sélectionner un semestre' onChange={this.selectSemester} />

        {
          this.state.selectedSemester &&
            <SelectInput items={this.parsedUes(ues)} placeholder='Sélectionner une UE' onChange={this.selectUE} />
        }

        {
          this.state.selectedUE &&
            <SelectInput items={this.parsedCourses(ues)} placeholder='Sélectionner une matière' onChange={this.selectCourse} />
        }

        {
          this.state.selectedCourse &&
            <div>
              <form onSubmit={this.submit} >
                <div>
                  <h2>Ajout du devoir</h2>
                  <input type="text" placeholder="Nom du devoir" name="name" onChange={this.handleSubjectChange} />
                  <textarea name="description" cols="30" placeholder="Description" onChange={this.handleSubjectChange} ></textarea>
                  <input type="number" name="coefficient" placeholder="coeff" min={0} step="any" onChange={this.handleSubjectChange} />
                </div>

                <div className="flex justify-content-sb">
                  <ReactTable
                    defaultPageSize={promotion.length}
                    data={promotion}
                    noDataText="Aucun élève trouvé."
                    columns={columns}
                    showPagination={false}
                    className="-highlight"
                    resizable={false}
                    pageSize={promotion.length}
                  />
                </div>
                <button className="button" type="submit" disabled={!this.state.validForm}>Submit</button>
              </form>
            </div>
        }
      </React.Fragment>
    );
  }

}

export default Form;
