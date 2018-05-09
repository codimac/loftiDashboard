import React from 'react';
import Proptypes from 'prop-types';

import Ue from './Ue.components';
import './ues.styles';


class ListUe extends React.Component {

  static propTypes = {
    getUesList: Proptypes.func.isRequired,
    ues: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.string.isRequired,
      name: Proptypes.string.isRequired,
      description: Proptypes.string.isRequired
    })).isRequired
  };

  componentDidMount() {
    this.props.getUesList();
  }

  /**
   * TODO :
   * récup les datas, les VRAIS <3
   * les filtres
   */
  render() {
    const { ues } = this.props;

    return (
      <div className='list-ues'>
        {ues.map(ue => <Ue key={ue.id} ue={ue} />)}
      </div>
    );
  }
}

export default ListUe;
