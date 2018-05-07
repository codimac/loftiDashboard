import React from 'react';
import Proptypes from 'prop-types';
import plus from '@images/icon-plus.png';
import './styles.scss';

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
    this.props.getPromotion(this.props.match.params.id);
  }

  render() {
    const { promotion } = this.props;
    return (
      <React.Fragment>
        <div className="promotions">
          <h1>Détails d'une promo</h1>
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Absences</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              { promotion.map(student => (
                <tr key={student.id}>
                  <td> {student.firstname} </td>
                  <td> {student.lastname} </td>
                  <td> 0 <img className="icon-plus" src={ plus } alt="ajouter une absence" /></td>
                  <td> 0 <img className="icon-plus" src={ plus } alt="ajouter une note" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }

}

export default DetailsPromotion;
