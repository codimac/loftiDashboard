import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';

import './style';

class PodiumStudients extends React.Component {

  componentDidMount() {
    this.props.getPromoPodiumAbsences();
  }

  renderPodium() {
    const {absencesPodium} = this.props;
    const podium = absencesPodium.slice(0, 3);
    const others = absencesPodium.slice(3);
    console.log(podium);
    return (
      <React.Fragment>
        {podium.length > 0 &&
          <React.Fragment>
            <li className="li-podium">
              <Link to={`/students/${podium[1].username}`}>
                {podium[1].firstname} {podium[1].lastname}
                <div className="p-second">
                  {podium[1].absences}
                </div>
              </Link>
            </li>
            <li className="li-podium">
              <Link to={`/students/${podium[0].username}`}>
                {podium[0].firstname} {podium[0].lastname}
                <div className="p-first">
                  {podium[0].absences}
                </div>
              </Link>
            </li>
            <li className="li-podium">
              <Link to={`/students/${podium[2].username}`}>
                {podium[2].firstname} {podium[2].lastname}
                <div className="p-third">
                  {podium[2].absences}
                </div>
              </Link>
            </li>
            <ReactTable
              defaultPageSize={others.length}
              data={others}
              noDataText="Aucun élève trouvé."
              columns={[
                {Header: 'Nom', accessor: 'lastname', headerStyle: { display: "none" }, className: 'centered-col'},
                {Header: 'Prénom', accessor: 'firstname', headerStyle: { display: "none" }, className: 'centered-col'}
              ]
              }
              showPagination={false}
              className="-highlight"
              resizable={false}
            />
            {/* {others.map(student => (
              <li>
                <Link to={`/students/${student.username}`}>
                  {student.firstname} {student.lastname}
                </Link>
              </li>
              )
            )} */}
          </React.Fragment>
        }
      </React.Fragment>
    );
  }
  render() {
    return (
      <div className="podium">
        le podium des meilleurs absents
        <ol >
          {this.renderPodium()}

        </ol>
      </div>
    );
  }
}

export default PodiumStudients;
