import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';

import Filter from '@Shared/containers/Filter.containers';

class DetailsPromotion extends React.Component {

  static propTypes = {
    getPromotion: Proptypes.func.isRequired,
    promotion: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      firstname: Proptypes.string.isRequired,
      lastname: Proptypes.string.isRequired
    })).isRequired
  };

  componentDidMount() {
    this.props.getPromotion();
  }

  render() {
    const { promotion } = this.props;
    return (
      <React.Fragment>
        <Filter />
        <h1>Détails d'une promo</h1>
        <ul>
          { promotion.map(student => (
            <li key={student.id}><Link className="link link__black" to={`/students/${student.username}`} >{student.firstname} - {student.lastname} - {student.username}</Link></li>
          ))}
        </ul>
        { !promotion.length &&
        <h4>Pas d'users</h4> // IMPROVE THIS MESSAGE
        }
      </React.Fragment>
    );
  }

}

export default DetailsPromotion;
