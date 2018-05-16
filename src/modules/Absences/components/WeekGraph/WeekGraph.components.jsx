import React from 'react';
import { defaults, Bar } from 'react-chartjs-2';

class WeekGraph extends React.Component {

  render() {
    const data = {
      labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
      datasets: [
        {
          label: 'absences par jour',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [15, 20, 10, 17, 5]
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
