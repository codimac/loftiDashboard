import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import { Bar } from 'react-chartjs-2';

import FilterTd from '@Shared/components/FilterTd/FilterTd.components';
import FilterInput from '@Shared/containers/FilterInput.containers';
import Wrapper from '@Shared/components/Wrapper/Wrapper.components';
import { average, arrayOf } from '@helpers/array.helpers';

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
      data: {},
      options: {}
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
    const labels = ['0 - 5', '5 - 10', '10 - 15', '15 - 20'];
    const dataStack = [];
    students.map(student => {
      const tdFounded = dataStack.find(stud => stud.td === student.td);
      let tdIndex = null;
      if (!tdFounded) {
        tdIndex = dataStack.push({
          td: student.td,
          data: arrayOf(labels.length, 0)
        })-1;
      }
      const gradeIndex = Math.floor(student.grades/5) > 3 ? 3 : Math.floor(student.grades/5);
      tdIndex = tdIndex === null ? dataStack.indexOf(tdFounded) : tdIndex;
      dataStack[tdIndex].data[gradeIndex]++;
      dataStack.sort((a, b) => a.td - b.td);
    });

    const data = {
      labels,
      datasets: [
        ...dataStack.map(td => ({
          label: `TD${td.td}`,
          data: td.data,
          backgroundColor: `rgba(${td.td * 100}, 0, 0, 1)`
        }))
      ]
    };

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 2,
            min: 0
          }
        }],
      }
    };

    this.setState({data, options});
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
        <div className="promotion flex justify-content-sb">
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
            <Bar data={this.state.data} options={this.state.options} height={300} />
          </Wrapper>
        </div>
      </React.Fragment>
    );
  }

}

export default DetailsPromotion;
