import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import store from '@App/App.store';
import ReactTable from 'react-table';

import { getPromotion } from '@Promos/reducers/details.reducers';

import * as promotionsDetailsEffects from '@Promos/effects/details.effects';

class List extends React.Component {

  static propTypes = {
    getAbsencesList: Proptypes.func.isRequired,
    year: Proptypes.number.isRequired,
    promotion: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      firstname: Proptypes.string.isRequired,
      lastname: Proptypes.string.isRequired,
      username: Proptypes.string.isRequired
    })).isRequired,
    match: Proptypes.shape({
      params: Proptypes.shape({
        id: Proptypes.string.isRequired
      }).isRequired
    }).isRequired,
  };
  constructor() {
    super();
    this.state = {
      selectedStudent: null,
    };
  }

  componentDidMount() {
    this.props.getAbsencesList();
    store.dispatch(promotionsDetailsEffects.getPromotion(this.props.match.params.promotionId));
  }

  getStudentDetails(event, id) {
    this.state.selectedStudent = id;
  }

  render() {
    const { promotion } = this.props;
    const {year} = this.props;

    const columns = [
      {Header: 'Nom', accessor: 'lastname'},
      {Header: 'Prénom', accessor: 'firstname'},
      {Header: 'Page', accessor: 'id', width: 50, className: 'centered-col',
        Cell: row => (<span role='none' className='icon-access' onClick={(e) => this.getStudentDetails(e, row.row.id)}> > </span>)}
    ];
    const len = promotion.length;
    return (
      <React.Fragment>
        <div className="absences">
          <h1>Les absences de la promos {year}</h1>
          <div className="flex flex-wrap-reverse justify-content-sb">
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
              />
            </section>
          </div>

        </div>
      </React.Fragment>
    );
  }
}

export default List;
