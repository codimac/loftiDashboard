import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';

class Podium extends React.Component {
  render() {
    const {podium} = this.props;
    const {accessor} = this.props;

    if (podium) {
      const first = podium[0];
      const seconde = podium[1];
      const third = podium[2];
      console.log(podium);
      return (
        <React.Fragment>
          {podium.length > 0 &&
            <React.Fragment>
              <li className="li-podium">
                <Link to={`/students/${seconde.username}`}>
                  {first.firstname} {seconde.lastname}
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
            </React.Fragment>
          }
        </React.Fragment>
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
