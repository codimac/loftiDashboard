import React from 'react';
import Proptypes from 'prop-types';

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
        <h1>Détails d'une promo</h1>
        <ul>
          { promotion.map(student => (
            <li key={student.id}>{student.firstname} {student.lastname}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

}

export default DetailsPromotion;
