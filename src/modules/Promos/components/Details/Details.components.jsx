import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';


import FilterTd from '@Shared/components/FilterTd/FilterTd.components';
import FilterInput from '@Shared/containers/FilterInput.containers'

import plus from '@images/icon-plus.png';
import './styles';

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

    return (
      <div className="promotions">
        <h1>Détails d'une promo</h1>

        <div className="flex justify-content-sb">
          <section className="section liste">
            <FilterInput placeholder="Rechercher un étudiant" />
            <FilterTd />
            <table>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Absences</th>
                  <th>Notes</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {promotion.map(student => (
                  <tr key={student.id}>
                    <td> {student.firstname} </td>
                    <td> {student.lastname} </td>
                    <td>
                      {/* data missing for absence */}
                      0
                      <Link to={`/absences/${student.id}`}>
                        <img className="icon-plus" src={plus} alt="ajouter une absence" />
                      </Link>
                    </td>
                    <td>
                      {/* data missing for notes */}
                      0
                      <Link to={`/grades/${student.id}`}>
                        <img className="icon-plus" src={plus} alt="ajouter une note" />
                      </Link>
                    </td>
                    <td className='icon-access'>
                      <Link to={`/students/${student.username}`}>
                        >
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="section actions">
            <h1>Les actions</h1>
            <ul>
              <li><Link to={`/promotions/${this.props.match.params.id}/subjects`} className="link link__black" >Ajouter un devoir</Link></li>
            </ul>
          </section>
        </div>
      </div>

    );
  }

}

export default DetailsPromotion;
