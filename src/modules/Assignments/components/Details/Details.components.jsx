import React from 'react';
import Proptypes from 'prop-types';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

import { arrayOf } from '@helpers/array.helpers';

import FilterInput from '@Shared/containers/FilterInput.containers';

class Details extends React.Component {

  static propTypes = {
    match: Proptypes.shape({
      params: Proptypes.shape({
        assignmentId: Proptypes.string.isRequired
      }).isRequired
    }).isRequired,
    assignment: Proptypes.shape({
      promotionYear: Proptypes.number,
      semesterId: Proptypes.number,
      ueId: Proptypes.number,
      subjectId: Proptypes.number,
      assignment: Proptypes.shape({
        name: Proptypes.string,
        description: Proptypes.string,
        coefficient: Proptypes.number
      }),
      grades: Proptypes.array.isRequired
    }).isRequired,
    getAssignment: Proptypes.func.isRequired
  };

  constructor() {
    super();
    this.state = {
      data: {},
      options: {}
    };
  }

  componentDidMount() {
    this.props.getAssignment(+this.props.match.params.assignmentId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.assignment.grades.length) {
      this.formatChartLineData(nextProps.assignment.grades);
    }
  }

  formatChartLineData(grades) {

    let labels = new Set();
    grades.map(student => labels.add(student.grades));
    labels = [...labels].sort((a, b) => a - b);
    const effectif = arrayOf(labels.length, 0);
    const td1 = arrayOf(labels.length, 0);
    const td2 = arrayOf(labels.length, 0);
    grades.map(student => {
      const index = labels.indexOf(student.grades);
      effectif[index]++;
      if (student.td === 1) td1[index]++;
      else td2[index]++;
      return 1;
    });

    const data = {
      labels,
      datasets: [
        {
          label: 'all',
          data: effectif,
          backgroundColor: 'rgba(250, 0, 0, 0.4)'
        },
        {
          label: 'TD1',
          data: td1,
          backgroundColor: 'rgba(250, 250, 0, 0.4)'
        },
        {
          label: 'TD2',
          data: td2,
          backgroundColor: 'rgba(0, 0, 250, 0.4)'
        }
      ]
    };

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 1,
            min: 0,
            max: Math.max(...effectif)+1
          }
        }]
      }
    };

    this.setState({data, options});
  }

  render() {
    const { assignment: {assignment, grades} } = this.props;
    const columns = [
      {Header: 'TD', accessor: 'td', width: 30,
        Cell: row => row.value
      },
      {Header: 'Elève', accessor: 'lastname', width: 200,
        Cell: row => `${row.original.firstname} ${row.original.lastname}`
      },
      {Header: 'Note', accessor: 'grades',
        Cell: row => row.value
      }
    ];
    return (
      <React.Fragment>
        <h1>{assignment.name}</h1>
        <h2>{assignment.description}</h2>
        <h2>Coefficient: {assignment.coefficient}</h2>
        <Link to={`${this.props.match.params.assignmentId}/edit`}>Editer</Link>

        <FilterInput placeholder='Eleve' />
        <div className="flex justify-content-sb">
          <ReactTable
            defaultPageSize={grades.length}
            defaultSorted={[{ id: 'lastname', desc: false}]}
            data={grades}
            noDataText="Aucun élève trouvé."
            columns={columns}
            showPagination={false}
            className="-highlight"
            resizable={false}
            pageSize={grades.length}
          />
        </div>

        <div className="chart">
          <Line data={this.state.data} options={this.state.options} />
        </div>

      </React.Fragment>
    );
  }

}

export default Details;
