import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import { Bar } from 'react-chartjs-2';

import FilterTd from '@Shared/components/FilterTd/FilterTd.components';
import FilterInput from '@Shared/containers/FilterInput.containers';
import Wrapper from '@Shared/components/Wrapper/Wrapper.components';
import Chart from '@Shared/components/Chart/Chart.components';

import { average, arrayOf, maxInArray } from '@helpers/array.helpers';
import { parsedData, formatData } from '@helpers/chart.helpers';

import plus from '@images/icon-plus.png';
import './Details.styles';

class DetailsPromotion extends React.Component {

  static propTypes = {
    getPromotion: Proptypes.func.isRequired,
    promotion: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      firstname: Proptypes.string.isRequired,
      lastname: Proptypes.string.isRequired
    })).isRequired,
    match: Proptypes.shape({
      params: Proptypes.shape({
        promotionId: Proptypes.string.isRequired
      }).isRequired
    }).isRequired,
  };

  constructor() {
    super();
    this.state = {
      grades: {
        data: {},
        options: {}
      },
      absences: {
        data: {},
        options: {}
      }
    };
  }

  componentDidMount() {
    this.props.getPromotion(this.props.match.params.promotionId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.promotionId !== nextProps.match.params.promotionId) {
      this.props.getPromotion(nextProps.match.params.promotionId);
    }
    if (nextProps.promotion.length) {
      this.formatChartData(nextProps.promotion);
    }
  }

  formatChartData(students) {
    // GRADES
    const gradesLabels = ['0 - 5', '5 - 10', '10 - 15', '15 - 20'];
    const gradesRawData = parsedData(gradesLabels, students, 'grades', (value) => (Math.floor(value / 5) > 3 ? 3 : Math.floor(value / 5)));
    const gradesData = formatData(gradesLabels, gradesRawData);

    const absencesLabels = ['0 - 5', '5 - 10', '10 - 15', '15 - 20', '20 - 25', '25 - 30'];
    const absencesRawData = parsedData(absencesLabels, students, 'absences', (value) => (Math.floor(value / 5) > 5 ? 5 : Math.floor(value / 5)));
    const absencesData = formatData(absencesLabels, absencesRawData);

    const gradesOptions = {
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 2,
            min: 0,
            max: maxInArray(gradesRawData)+1
          }
        }],
      }
    };

    const absencesOptions = {
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 2,
            min: 0,
            max: maxInArray(absencesRawData) + 1
          }
        }],
      }
    };

    this.setState({
      grades: {data: gradesData, options: gradesOptions},
      absences: {data: absencesData, options: absencesOptions}
    });
  }

  render() {
    const { promotion } = this.props;
    const columns = [
      {Header: 'TD', accessor: 'td', width: 30,
        Cell: row => row.value
      },
      {Header: 'Nom', accessor: 'lastname'},
      {Header: 'Prénom', accessor: 'firstname'},
      {Header: 'Absences', accessor: 'absences', width: 75, className: 'centered-col',
        Cell: row => (
          <React.Fragment>
            {row.value}
            <Link to={`/grades/${row.row.username}`}>
              <img className="icon-plus" src={plus} alt="ajouter une note" />
            </Link>
          </React.Fragment>
        )
      },
      {Header: 'Notes', accessor: 'grades', width: 75, className: 'centered-col',
        Cell: row => (
          <React.Fragment>
            {row.value}
            <Link to={`/grades/${row.row.username}`}>
              <img className="icon-plus" src={plus} alt="ajouter une note" />
            </Link>
          </React.Fragment>
        )
      },
      {Header: 'Page', accessor: 'username', width: 50, className: 'centered-col',
        Cell: row => (<span className='icon-access'><Link to={`/students/${row.value}`}> > </Link> </span>)}
    ];

    const len = promotion.length;
    return (
      <React.Fragment>
        <h1 className="page-title">Détails d'une promo</h1>
        <div className="promotion-details flex justify-content-sb">
          <Wrapper title="Liste des élèves" className="promotion__list">
            <div className="filters">
              <FilterTd />
              <FilterInput placeholder="Elève..." />
            </div>
            <ReactTable
              defaultPageSize={len}
              defaultSorted={[{id: 'lastname', desc: false}]}
              data={promotion}
              noDataText="Aucun élève trouvé."
              columns={columns}
              showPagination={false}
              className="-highlight"
              resizable={false}
              pageSize={len}
            />
          </Wrapper>
          <Wrapper title="Résumé de la promotion" className="promotion__average">
            <p className="average">Moyenne de la classe : <span>{average(promotion, 'grades')}</span></p>
            <p className="average">Moyenne des absences : <span>{average(promotion, 'absences')}</span></p>
            <Chart title="moyenne des élèves par TD">
              <Bar data={this.state.grades.data} options={this.state.grades.options} height={200} />
            </Chart>
            <Chart title="moyenne des absences">
              <Bar data={this.state.absences.data} options={this.state.absences.options} height={200} />
            </Chart>
          </Wrapper>
        </div>
      </React.Fragment>
    );
  }

}

export default DetailsPromotion;
