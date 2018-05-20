import React from 'react';
import Proptypes from 'prop-types';
import store from '@App/App.store';
import ReactTable from 'react-table';
import { getPromotion } from '@Promos/reducers/details.reducers';

import * as promotionsDetailsEffects from '@Promos/effects/details.effects';
import StudentDetails from '@Absences/containers/StudentDetails.containers';
import PodiumStudient from '@Absences/containers/PromoPodiumStudent.containers';
import WeekGraph from '@Absences/containers/WeekGraph.containers';

import './styles';

class List extends React.Component {

  static propTypes = {
    // year: Proptypes.number.isRequired,
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
    const year = this.props.match.params.promotionId; // à améliorer
    const columns = [
      {Header: 'Nom', accessor: 'lastname'},
      {Header: 'Prénom', accessor: 'firstname'},
      {Header: 'Voir', accessor: 'id', width: 50, className: 'centered-col',
        Cell: row => (<span role='none' className='icon-access' onClick={(e) => this.getStudentDetails(e, row.row)}> > </span>)}
    ];
    const len = promotion.length;
    return (
      <React.Fragment>
        <div className="absences">
          <h1>Les absences de la promos {year}</h1>
          <div className="flex justify-content-sb">
            <section className="alig-items-start">
              <ReactTable
                defaultPageSize={len}
                data={promotion}
                noDataText="Aucun élève trouvé."
                columns={columns}
                showPagination={false}
                className="-highlight"
                resizable={false}
                pageSize={len}
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
            </section>
            <section>
              {
                this.state.selectedStudent===true &&
                  <StudentDetails id={this.state.selectedStudent} student={this.state.student} onClose={this.closeStudent} />
              }
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
