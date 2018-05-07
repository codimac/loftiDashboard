import React from 'react';
import Proptypes from 'prop-types';
import plus from '@images/icon-plus.png';
import { Link } from 'react-router-dom';
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              { promotion.map(student => (
                <tr key={student.id}>
                  <td> {student.firstname} </td>
                  <td> {student.lastname} </td>
                  <td>
                    {/* data missing for absence */}
                    0
                    <Link to={`/absence/${student.id}`}>
                      <img className="icon-plus" src={ plus } alt="ajouter une absence" />
                    </Link>
                  </td>
                  <td>
                    {/* data missing for notes */}
                    0
                    <Link to={`/grades/${student.id}`}>
                      <img className="icon-plus" src={ plus } alt="ajouter une note" />
                    </Link>
                  </td>
                  <td className='icon-access'>
                    <Link to={`/student/${student.id}`}>
                      >
                    </Link>
                  </td>
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
