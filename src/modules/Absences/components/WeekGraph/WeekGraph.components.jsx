import React from 'react';
import { defaults, Bar } from 'react-chartjs-2';
import Proptypes from 'prop-types';

import { extractColumn } from '@helpers/array.helpers';
import { backgroundChart } from '@helpers/chart.helpers';

class WeekGraph extends React.Component {
  static propTypes = {
    getAbsencesWeekGraphList: Proptypes.func.isRequired,
    graph: Proptypes.arrayOf(Proptypes.shape({
      day: Proptypes.string.isRequired,
      absences: Proptypes.number.isRequired,
    })).isRequired,

  };
  componentDidMount() {
    this.props.getAbsencesWeekGraphList();
  }

  render() {
    const {graph} = this.props;
    const data = {
      labels: extractColumn(graph, 'day'),
      datasets: [
        {
          label: 'Absences par jour',
          backgroundColor: backgroundChart[0],
          data: extractColumn(graph, 'absences')
        }
      ]
    };
    return (
      <React.Fragment>
        <Bar
          data={data}
          height={500}
          options={{
            maintainAspectRatio: false
          }}
        />
      </React.Fragment>
    );
  }

}

export default WeekGraph;
