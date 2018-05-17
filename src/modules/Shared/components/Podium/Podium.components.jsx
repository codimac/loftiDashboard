import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import './styles';

class Podium extends React.Component {
  static propTypes = {
    podium: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      firstname: Proptypes.string.isRequired,
      lastname: Proptypes.string.isRequired,
      username: Proptypes.string.isRequired
    })).isRequired,
    accessor: Proptypes.string.isRequired
  };
  render() {
    const {podium} = this.props;
    const {accessor} = this.props;
    if (podium) {
      const first = podium[0];
      const seconde = podium[1];
      const third = podium[2];
      return (
        <div className="podium">
          {podium.length > 0 &&
            <ul>
              <li className="li-podium">
                <Link to={`/students/${seconde.username}`}>
                  {seconde.firstname} {seconde.lastname}
                  <div className="p-second">
                    {seconde[accessor]}
                  </div>
                </Link>
              </li>
              <li className="li-podium">
                <Link to={`/students/${first.username}`}>
                  {first.firstname} {first.lastname}
                  <div className="p-first">
                    {first[accessor]}
                  </div>
                </Link>
              </li>
              <li className="li-podium">
                <Link to={`/students/${third.username}`}>
                  {third.firstname} {third.lastname}
                  <div className="p-third">
                    {third[accessor]}
                  </div>
                </Link>
              </li>
            </ul>
          }
        </div>
      );
    }
    return (
      <p>
        pas de podium
      </p>
    );
  }
}

export default Podium;
