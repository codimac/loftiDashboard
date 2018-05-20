import React from 'react';
import Proptypes from 'prop-types';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

import { arrayOf, getRange, average, maxInArray } from '@helpers/array.helpers';
import { parsedData, formatData } from '@helpers/chart.helpers';

import store from '@App/App.store';
import { getPromotionId } from '@Promos/reducers/details.reducers';
import * as promotionsDetailsEffects from '@Promos/effects/details.effects';
import FilterInput from '@Shared/containers/FilterInput.containers';
import FilterTd from '@Shared/components/FilterTd/FilterTd.components';
import FilterRange from '@Shared/containers/FilterRange.containers';
import Wrapper from '@Shared/components/Wrapper/Wrapper.components';
import Chart from '@Shared/components/Chart/Chart.components';
import Button from '@Shared/components/Button/Button.components';

import './Details.styles';

class Details extends React.Component {

  static propTypes = {
    match: Proptypes.shape({
      params: Proptypes.shape({
        promotionId: Proptypes.string.isRequired,
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
    if (!getPromotionId(store.getState())) {
      store.dispatch(promotionsDetailsEffects.getPromotion(+this.props.match.params.promotionId));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.assignment.grades.length) {
      this.formatChartLineData(nextProps.assignment.grades);
    }
  }

  formatChartLineData(students) {
    const labels = [0, ...getRange(20)];
    const rawData = parsedData(labels, students, 'grades', value => labels.indexOf(value));
    const data = formatData(labels, rawData);


    const options = {
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 1,
            min: 0,
            max: maxInArray(rawData)+1
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
        <h1 className="page-title">Détails du devoir : {assignment.name}</h1>
        <div className="assignment-details flex justify-content-sb">
          <Wrapper title="Liste des élèves" className="assignment__students">
            <div className="filters">
              <div className="students">
                <FilterTd />
                <FilterInput placeholder="Elève..." />
              </div>
              <div className="range">
                <span>Absences : </span>
                <div className="slider">
                  <FilterRange />
                </div>
              </div>
            </div>
            <ReactTable
              defaultPageSize={grades.length}
              defaultSorted={[{ id: 'lastname', desc: false }]}
              data={grades}
              noDataText="Aucun élève trouvé."
              columns={columns}
              showPagination={false}
              className="-highlight"
              resizable={false}
              pageSize={grades.length}
            />
          </Wrapper>

          <div className="right-side flex">
            <Wrapper title="Le devoir" className="assignment__details">
              <ul className="details-container">
                <li className="details-li"><span>Nom : </span>{assignment.name}</li>
                <li className="details-li"><span>Description : </span>{assignment.description}</li>
                <li className="details-li"><span>Coefficient : </span>{assignment.coefficient}</li>
                <li className="details-li"><span>Nombre de notes : </span>{grades.length}</li>
                <li className="flex-inline align-items-start details-li mt-0 justify-content-start">
                  <p><span>TD1 : </span>{average(grades, 'grades')}</p>
                  <p className="ml-4"><span>TD1 : </span>{average(grades.filter(student => student.td === 1), 'grades')}</p>
                  <p className="ml-4"><span>TD2 : </span>{average(grades.filter(student => student.td === 2), 'grades')}</p>
                </li>
                <li>
                  <Link to={`${this.props.match.params.assignmentId}/edit`} className="link mt-2">
                    <Button className="button small pl-4 pr-4">Editer</Button>
                  </Link>
                </li>
              </ul>
            </Wrapper>


            <Wrapper title="Les notes" className="assignment__chart">
              <Chart title="Les notes du devoir triées par TD">
                <Line data={this.state.data} options={this.state.options} />
              </Chart>
            </Wrapper>
          </div>

        </div>

      </React.Fragment>
    );
  }

}

export default Details;
