import React from 'react';
import Proptypes from 'prop-types';
import './style';

class PodiumStudients extends React.Component {

  componentDidMount() {
    this.props.getPromoPodiumAbsences();
  }

  renderPodium() {
    const {absencesPodium} = this.props;
    const podium = absencesPodium.slice(0, 3);
    const others = absencesPodium.slice(4);
    return (
      <React.Fragment>
        {podium.length > 0 &&
          <React.Fragment>
            <li className="li-podium">
              {podium[1].firstname} {podium[1].lastname}
              <div className="p-second">
                2
              </div>
            </li>
            <li className="li-podium">
              {podium[0].firstname} {podium[0].lastname}
              <div className="p-first">
                1
              </div>
            </li>
            <li className="li-podium">
              {podium[2].firstname} {podium[2].lastname}
              <div className="p-third">
                3
              </div>
            </li>
            {others.map(student => (
              <li>
                {student.firstname} {student.lastname}
              </li>
              )
            )}
          </React.Fragment>
        }
      </React.Fragment>
    );
  }
  render() {
    const {absencesPodium} = this.props;
    const podium = absencesPodium.slice(0, 3);

    return (
      <div>
        le podium des meilleurs absents
        <ol className="podium">
          {this.renderPodium()}

        </ol>
      </div>
    );
  }
}

export default PodiumStudients;
