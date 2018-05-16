import React from 'react';
import { defaults, Bar } from 'react-chartjs-2';

class WeekGraph extends React.Component {

  componentDidMount() {
    this.props.getAbsencesWeekGraphList();
  }

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
          options={{
            maintainAspectRatio: false
          }}
        />
      </React.Fragment>
    );
  }

}

export default WeekGraph;
