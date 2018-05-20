import React from 'react';
import { defaults, Bar } from 'react-chartjs-2';
import Proptypes from 'prop-types';

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

  /**
   * allow us to extract from an array of objects a column
   * @param {array} arr
   * @param {string} column
   */
  extractColumn(arr, column) {
    function reduction(previousValue, currentValue) {
      previousValue.push(currentValue[column]);
      return previousValue;
    }
    return arr.reduce(reduction, []);
  }

  render() {
    const {graph} = this.props;
    const data = {
      labels: this.extractColumn(graph, 'day'),
      datasets: [
        {
          label: 'Absences par jour',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: this.extractColumn(graph, 'absences')
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
