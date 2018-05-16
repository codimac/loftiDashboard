import React from 'react';
import Proptypes from 'prop-types';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

import { arrayOf, getRange } from '@helpers/array.helpers';

import FilterInput from '@Shared/containers/FilterInput.containers';
import FilterTd from '@Shared/components/FilterTd/FilterTd.components';
import FilterRange from '@Shared/containers/FilterRange.containers';

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

    const labels = [0, ...getRange(20)];
    const dataTd = [];
    grades.map(student => {
      const tdFounded = dataTd.find(tdGrades => tdGrades.td === student.td);
      let tdIndex = -1;
      if (!tdFounded) {
        tdIndex = dataTd.push({
          td: student.td,
          data: arrayOf(labels.length, 0)
        })-1;
      }
      tdIndex = tdIndex === -1 ? dataTd.indexOf(tdFounded) : tdIndex;
      dataTd[tdIndex].data[labels.indexOf(student.grades)]++;
      dataTd.sort((a, b) => a.td - b.td);
    });

    const data = {
      labels,
      datasets: [
        ...dataTd.map(td => ({
          label: `TD${td.td}`,
          data: td.data,
          backgroundColor: `rgba(${td.td*100}, 0, 0, 0.4)`
        }))
      ]
    };

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 1,
            min: 0,
            max: Math.max(...dataTd.map(array => Math.max(...array.data)))+1
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
        <FilterTd />
        <FilterRange />
        <div className="chart">
          <Line data={this.state.data} options={this.state.options} />
        </div>
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


      </React.Fragment>
    );
  }

}

export default Details;
