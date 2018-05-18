import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';

import FilterTd from '@Shared/components/FilterTd/FilterTd.components';
import FilterInput from '@Shared/containers/FilterInput.containers';
import Wrapper from '@Shared/components/Wrapper/Wrapper.components';
import { average } from '@helpers/array.helpers';

import plus from '@images/icon-plus.png';
import './Details.styles';

class DetailsPromotion extends React.Component {

  static propTypes = {
    getPromotion: Proptypes.func.isRequired,
    promotion: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      firstname: Proptypes.string.isRequired,
      lastname: Proptypes.string.isRequired
    })).isRequired,
    match: Proptypes.shape({
      params: Proptypes.shape({
        promotionId: Proptypes.string.isRequired
      }).isRequired
    }).isRequired,
  };

  componentDidMount() {
    this.props.getPromotion(this.props.match.params.promotionId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.promotionId !== nextProps.match.params.promotionId) {
      this.props.getPromotion(nextProps.match.params.promotionId);
    }
  }

  render() {
    const { promotion } = this.props;
    const columns = [
      {Header: 'TD', accessor: 'td', width: 30,
        Cell: row => row.value
      },
      {Header: 'Nom', accessor: 'lastname'},
      {Header: 'Prénom', accessor: 'firstname'},
      {Header: 'Absences', accessor: 'absences', width: 75, className: 'centered-col',
        Cell: row => (
          <React.Fragment>
            {row.value}
            <Link to={`/grades/${row.row.username}`}>
              <img className="icon-plus" src={plus} alt="ajouter une note" />
            </Link>
          </React.Fragment>
        )
      },
      {Header: 'Notes', accessor: 'grades', width: 75, className: 'centered-col',
        Cell: row => (
          <React.Fragment>
            {row.value}
            <Link to={`/grades/${row.row.username}`}>
              <img className="icon-plus" src={plus} alt="ajouter une note" />
            </Link>
          </React.Fragment>
        )
      },
      {Header: 'Page', accessor: 'username', width: 50, className: 'centered-col',
        Cell: row => (<span className='icon-access'><Link to={`/students/${row.value}`}> > </Link> </span>)}
    ];

    const len = promotion.length;
    return (
      <React.Fragment>
        <h1 className="page-title">Détails d'une promo</h1>
        <div className="promotion flex justify-content-sb">
          <Wrapper title="Liste des élèves" className="promotion__list">
            <div className="filters">
              <FilterTd />
              <FilterInput placeholder="Elève..." />
            </div>
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
          </Wrapper>
          <Wrapper title="Résumé de la promotion" className="promotion__average">
            <p className="average">Moyenne de la classe : <span>{average(promotion, 'grades')}</span></p>
            <p className="average">Moyenne des absences : <span>{average(promotion, 'absences')}</span></p>
          </Wrapper>
        </div>
      </React.Fragment>
    );
  }

}

export default DetailsPromotion;
