import React from 'react';
import Proptypes from 'prop-types';

import Details from '@Ues/components/Details/Details.components';

class List extends React.Component {

  static propTypes = {
    getUesList: Proptypes.func.isRequired,
    ues: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
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
        <ul>
          {/* {
            ue.map()
          } */}
        </ul>
      </div>
    );
  }
}

export default List;
