import React from 'react';
import Proptypes from 'prop-types';
import store from '@App/App.store';
import ReactTable from 'react-table';
import { getPromotion } from '@Promos/reducers/details.reducers';

import * as promotionsDetailsEffects from '@Promos/effects/details.effects';
import StudentDetails from '@Absences/containers/StudentDetails.containers';
import PodiumStudient from '@Absences/containers/PromoPodiumStudent.containers';
import WeekGraph from '@Absences/containers/WeekGraph.containers';
import Form from '@Absences/containers/Form.containers';

import Wrapper from '@Shared/components/Wrapper/Wrapper.components';
import Chart from '@Shared/components/Chart/Chart.components';

import './List.styles';

class List extends React.Component {

  static propTypes = {
    promotion: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      firstname: Proptypes.string.isRequired,
      lastname: Proptypes.string.isRequired,
      username: Proptypes.string.isRequired
    })).isRequired,
    match: Proptypes.shape({
      params: Proptypes.shape({
        promotionId: Proptypes.string.isRequired,
      }).isRequired
    }).isRequired,
  };

  constructor() {
    super();
    this.state = {
      selectedStudent: false,
      student: null,
    };
    this.closeStudent = this.closeStudent.bind(this);
  }

  componentDidMount() {
    store.dispatch(promotionsDetailsEffects.getPromotion(this.props.match.params.promotionId));
  }

  /**
   * allow the opening of the student detail
   * @param {object} event event object
   * @param {object} row the row of the table data
   */
  getStudentDetails(event, row) {
    const {firstname, lastname, id} = row;
    this.setState({selectedStudent: true, student: {firstname, lastname, id}});
  }

  /**
   * close the student details panel
   */
  closeStudent() {
    this.setState({selectedStudent: false, student: null});
  }

  render() {
    const { promotion } = this.props;
    const columns = [
      {Header: 'Eleve', accessor: 'lastname',
        Cell: row => `${row.original.firstname} ${row.original.lastname}`
      },
      {Header: 'Absences', accessor: 'absences', width: 75,
        Cell: row => row.value
      },
      {Header: 'Voir', accessor: 'id', width: 50, className: 'centered-col',
        Cell: row => <span role='none' className="link link__yellow" onClick={(e) => this.getStudentDetails(e, row.row)}> > </span>}
    ];


    return (
      <React.Fragment>
        <h1 className="page-title">Les absences de la promo {this.props.match.params.promotionId}</h1>
        <div className="absences flex justify-content-sb">

          <Wrapper title="Liste des élèves absents" className="absences__list">
            <ReactTable
              defaultPageSize={promotion.length}
              data={promotion}
              noDataText="Aucun élève trouvé."
              columns={columns}
              showPagination={false}
              className="-highlight"
              resizable={false}
              pageSize={promotion.length}
              getTrProps={(state, rowInfo, column) => {
                return {
                  onClick: (e, handleOriginal) => {
                    this.getStudentDetails(e, rowInfo.original);
                  },
                  style: {
                    cursor: 'pointer'
                  }
                };
              }}
            />
          </Wrapper>

          {
            this.state.selectedStudent &&
              <div className="right-side">
                <Wrapper title={`les absences de ${this.state.student.firstname} ${this.state.student.lastname}`} onClose={this.closeStudent} className="absences__details">
                  <StudentDetails id={this.state.selectedStudent} student={this.state.student} />
                </Wrapper>

                <Wrapper title={`Ajouter une absence pour ${this.state.student.firstname} ${this.state.student.lastname}`} className="absences__add">
                  <Form student={this.state.student} />
                </Wrapper>
              </div>
          }
        </div>
        <div className="absences">
          <div className="flex justify-content-sb">
            <section>
              <PodiumStudient />
            </section>
            <section className='graph-high'>
              <h3>Les jours mal aimés</h3>
              <WeekGraph />
            </section>
          </div>

        </div>
      </React.Fragment>
    );
  }
}

export default List;
