import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import { ToastContainer } from 'react-toastify';

import store from '@App/App.store';
import { convertArrayToObjet } from '@helpers/array.helpers';

import * as promotionsDetailsEffects from '@Promos/effects/details.effects';
import * as semestersListEffects from '@Semesters/effects/list.effects';
import * as uesListEffects from '@Ues/effects/list.effects';
import * as assignmentsDetailsEffects from '@Assignments/effects/details.effects';
import * as subjectsListEffects from '@Subjects/effects/list.effects';

import SelectInput from '@Shared/components/SelectInput/SelectInput.components';
import Input from '@Shared/components/Input/Input.components';
import Textarea from '@Shared/components/Textarea/Textarea.components';
import Wrapper from '@Shared/components/Wrapper/Wrapper.components';

import './Form.styles';

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
    subjects: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      name: Proptypes.string.isRequired,
      description: Proptypes.string.isRequired
    })).isRequired,
    assignment: Proptypes.shape({
      promotionYear: Proptypes.number,
      semesterId: Proptypes.number,
      ueId: Proptypes.number,
      subjectId: Proptypes.number,
      assignment: Proptypes.shape({
        name: Proptypes.string,
        description: Proptypes.string,
        coefficient: Proptypes.number
      }),
      grades: Proptypes.array
    }),
    match: Proptypes.shape({
      params: Proptypes.shape({
        promotionId: Proptypes.string.isRequired,
        assignmentId: Proptypes.string
      }).isRequired
    }).isRequired,
    createAssignmentWithGrades: Proptypes.func.isRequired,
    editAssignmentWithGrades: Proptypes.func.isRequired
  };

  constructor() {
    super();
    this.initialState = {
      isEditing: null,
      selectedSemester: null,
      selectedUE: null,
      selectedSubject: null,
      validForm: false,
      assignment: null,
      grades: null
    };
    this.state = this.initialState;
  }

  componentWillMount() {
    this.setState({
      isEditing: !!+this.props.match.params.assignmentId,
    });
  }

  componentDidMount() {
    store.dispatch(promotionsDetailsEffects.getPromotion(this.props.match.params.promotionId));
    if (this.state.isEditing) {
      store.dispatch(assignmentsDetailsEffects.getAssignment(this.props.match.params.assignmentId));
    }
    store.dispatch(semestersListEffects.getSemesterForPromo(this.props.match.params.promotionId));
  }

  componentWillReceiveProps(nextProps) {
    const { assignment } = nextProps;
    if (assignment && this.state.isEditing) {
      this.setState({
        selectedSemester: assignment.semesterId,
        selectedUE: assignment.ueId,
        selectedSubject: assignment.subjectId,
        assignment: assignment.assignment,
        grades: convertArrayToObjet(assignment.grades, 'id', 'grades')
      }, () => {
        this.validForm();
        store.dispatch(uesListEffects.getUesListFromSemester(this.state.selectedSemester));
        store.dispatch(subjectsListEffects.getSubjectsListForUe(this.state.selectedSubject));
      });
    }
    if (nextProps.match !== this.props.match) {
      this.setState(this.initialState);
    }
  }

  selectSemester = ev => {
    this.setState({selectedSemester: +ev.target.value});
    store.dispatch(uesListEffects.getUesListFromSemester(this.state.selectedSemester));
  }

  selectUE = ev => {
    this.setState({selectedUE: +ev.target.value});
    store.dispatch(subjectsListEffects.getSubjectsListForUe(this.state.selectedSubject));
  }

  selectSubject = ev => {
    this.setState({selectedSubject: +ev.target.value});
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

  parsedItems = items => {
    return items.map(item => ({
      ...item,
      value: item.id,
      label: item.name
    }));
  }

  handleSubjectChange = ev => {
    this.setState({
      assignment: {
        ...this.state.assignment,
        [ev.target.name]: ev.target.value
      }
    }, () => this.validForm());
  }

  handleGradeChange = ev => {
    const key = ev.target.name;
    this.setState({
      grades: {
        ...this.state.grades,
        [key]: ev.target.value !== '' ? +ev.target.value : null
      }
    }, () => {
      if (this.state.grades[key] === null) {
        delete this.state.grades[key];
      }
      this.validForm();
    });
  }

  prepareSave = () => {
    const assignmentWithGrades = {
      promotionYear: this.props.year,
      semesterId: this.state.selectedSemester,
      ueId: this.state.selectedUE,
      subjectId: this.state.selectedSubject,
      assignment: {
        ...this.state.assignment,
        coefficient: +this.state.assignment.coefficient,
      },
      grades: this.state.grades
    };
    if (this.state.isEditing) {
      this.props.editAssignmentWithGrades(assignmentWithGrades);
    } else {
      this.props.createAssignmentWithGrades(assignmentWithGrades);
    }
  }

  submit = ev => {
    ev.preventDefault();
    this.prepareSave();
  }

  validForm = () => {
    const { assignment, grades } = this.state;
    const subjectValues = Object.values(assignment);
    const gradesValues = Object.values(grades || {});
    this.setState({
      validForm: subjectValues.length === 3 && subjectValues.every(value => value.length !== 0) &&
        gradesValues.length !== 0
    });
  }

  initForm = () => {
    const bool = !!this.props.assignment;
    return {
      assignment: {
        name: bool ? this.props.assignment.assignment.name : '',
        description: bool ? this.props.assignment.assignment.description : '',
        coefficient: bool ? this.props.assignment.assignment.coefficient : '',
      },
      grades: bool ? this.props.assignment.grades : null,
      semesterId: bool ? this.props.assignment.semesterId : null,
      ueId: bool ? this.props.assignment.ueId : null,
      subjectId: bool ? this.props.assignment.subjectId : null
    };
  }

  render() {
    const { year, promotion, semesters, ues, assignment, subjects } = this.props;
    const values = this.initForm();
    const columns = [
      {Header: 'Elève', accessor: 'lastname', className: 'align-self-center',
        Cell: row => `${row.original.firstname} ${row.original.lastname}`
      },
      {Header: 'Note',
        Cell: row => {
          const student = this.state.isEditing ? values.grades.find(user => user.id === row.original.id) : null;
          return (
            <Input type="number" placeholder="Note" min={0} step="any" defaultValue={student ? student.grades : ''} name={row.original.id} onChange={this.handleGradeChange} className="full-size" />
          );
        }
      }
    ];

    return (
      <div>
        {
          this.state.isEditing
            ? (<h1 className="page-title">Edition du devoir : {values.assignment.name}</h1>)
            : (<h1 className="page-title">Ajouter un devoir </h1>)
        }

        <div className="flex justify-content-sb assignment-form">
          <Wrapper title="Le devoir" className="assignment">
            {
              this.state.isEditing
                ? (<SelectInput items={this.parsedSemesters(semesters)} placeholder='Sélectionner un semestre' selected={values.semesterId} className="full-size" onChange={this.selectSemester} required />)
                : (<SelectInput items={this.parsedSemesters(semesters)} placeholder='Sélectionner un semestre' selected={0} className="full-size" onChange={this.selectSemester} required />)
            }
            {
              this.state.selectedSemester &&
                <SelectInput items={this.parsedItems(ues)} placeholder='Sélectionner une UE' selected={values.ueId} onChange={this.selectUE} className="mt-1 full-size" required />
            }
            {
              this.state.selectedUE &&
                <SelectInput items={this.parsedItems(subjects)} placeholder='Sélectionner une matière' selected={values.subjectId} onChange={this.selectSubject} className="mt-1 full-size" required />
            }
            {
              this.state.selectedSubject &&
                <form onSubmit={this.submit} className="mt-3">
                  <div>
                    <Input type="text" placeholder="Nom du devoir" name="name" defaultValue={values.assignment.name} onChange={this.handleSubjectChange} required />
                    <Textarea name="description" rows={3} placeholder="Description" defaultValue={values.assignment.description} onChange={this.handleSubjectChange} className="full-size mt-2" required />
                    <Input type="number" name="coefficient" placeholder="coeff" min={0} step="any" defaultValue={values.assignment.coefficient} onChange={this.handleSubjectChange} className="full-size mt-2 mb-2" required />
                    <button className="button" type="submit small" disabled={!this.state.validForm}>Submit</button>
                  </div>
                </form>
            }
          </Wrapper>

          {
            this.state.selectedSubject &&
              <Wrapper title="Les notes" className="grades">
                <ReactTable
                  defaultPageSize={promotion.length}
                  defaultSorted={[{id: 'lastname', desc: false}]}
                  data={promotion}
                  noDataText="Aucun élève trouvé."
                  columns={columns}
                  showPagination={false}
                  className="-highlight"
                  resizable={false}
                  pageSize={promotion.length}
                  sortable={false}
                />
              </Wrapper>
          }
        </div>
        <ToastContainer />
      </div>
    );
  }

}

export default Form;
