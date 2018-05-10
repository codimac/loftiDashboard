import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';

import plus from '@images/icon-plus.png';
import Filter from '@Shared/containers/Filter.containers';

import 'react-table/react-table.css';
import './styles.scss';

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
        id: Proptypes.string.isRequired
      }).isRequired
    }).isRequired,
  };

  componentDidMount() {
    this.props.getPromotion(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.getPromotion(nextProps.match.params.id);
    }
  }

  render() {
    const { promotion } = this.props;
    const columns = [
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

    return (
      <React.Fragment>
        <div className="promotions">
          <h1>Détails d'une promo</h1>


          <div className="flex flex-wrap-reverse justify-content-sb">
            <section className="alig-items-start">
              <Filter placeholder="Rechercher un étudiant" />
              <ReactTable
                data={promotion}
                columns={columns}
                showPagination={false}
                className="-highlight"
                resizable={false}
              />

            </section>

            <section className="alig-items-start actions">
              <h1>Les actions</h1>
              <ul>
                <li><Link to={`/promotions/${this.props.match.params.id}/absences`} className="link link__black" >Consulter les absences</Link></li>
                <li><Link to={`/promotions/${this.props.match.params.id}/addAbsences`} className="link link__black" >Ajouter une absence</Link></li>
                <li><Link to={`/promotions/${this.props.match.params.id}/subjects`} className="link link__black" >Ajouter un devoir</Link></li>
              </ul>
            </section>
          </div>

        </div>
      </React.Fragment>
    );
  }

}

export default DetailsPromotion;
