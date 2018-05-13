import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';


class Podium extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: props.data,
      title: props.title,
      link: props.link,
    }
  }

  render() {
    const podium = this.state.data.slice(0, 3);
    const others = this.state.data.slice(3);
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
}

export default Podium;
