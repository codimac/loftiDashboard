import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import Podium from '@modules/Shared/components/Podium/Podium.components';

import './style';

class PodiumStudients extends React.Component {
  static propTypes = {
    getPromoPodiumAbsences: Proptypes.func.isRequired,
    absencesPodium: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      firstname: Proptypes.string.isRequired,
      lastname: Proptypes.string.isRequired,
      username: Proptypes.string.isRequired
    })).isRequired,
  };
  componentDidMount() {
    this.props.getPromoPodiumAbsences();
  }

  renderPodium() {
    const {absencesPodium} = this.props;
    const podium = absencesPodium.slice(0, 3);
    const others = absencesPodium.slice(3);
    return (
      <React.Fragment>
        {podium.length >= 3 &&
          <React.Fragment>
            <Podium podium={podium} accessor='abs_count' />
            <ReactTable
              defaultPageSize={others.length}
              data={others}
              noDataText="Aucun élève trouvé."
              columns={[
                {Header: 'Nom', accessor: 'lastname', headerStyle: { display: 'none' }, className: 'centered-col'},
                {Header: 'Prénom', accessor: 'firstname', headerStyle: { display: 'none' }, className: 'centered-col'},
                {Header: '', accessor: 'abs_count', headerStyle: { display: 'none' }, className: 'centered-col', width: 50}
              ]
              }
              showPagination={false}
              className="-highlight"
              resizable={false}
              getTrProps={(state, rowInfo, column) => {
                return {
                  onClick: (e, handleOriginal) => {
                    window.location = `/students/${rowInfo.original.username}`;
                  },
                  style: {
                    cursor: 'pointer'
                  }
                };
              }}
            />
          </React.Fragment>
        }
      </React.Fragment>
    );
  }
  render() {
    const {absencesPodium} = this.props;
    const podium = absencesPodium.slice(0, 3);
    return (
      <div className="podium-absences">
        <h3> Le podium des meilleurs absents</h3>
        {this.renderPodium()}

      </div>
    );
  }
}

export default PodiumStudients;
