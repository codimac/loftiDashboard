import React from 'react';
import Proptypes from 'prop-types';

import './Chart.styles';

class Chart extends React.Component {

  static propTypes = {
    title: Proptypes.string.isRequired,
    children: Proptypes.node.isRequired,
  };

  render() {
    const { title, children } = this.props;
    return (
      <div className="chart-wrapper">
        <h3 className="mb-2 chart-title">{ title }</h3>
        <div className="chart">
          { children }
        </div>
      </div>
    );
  }

}

export default Chart;
