import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from '@Grades/components/Form/Form.components';

import { getPromotionsList } from '@Promos/reducers/list.reducers';
import { getPromotion } from '@Promos/reducers/details.reducers';
import { getSemestersList } from '@Semesters/reducers/list.reducers';
import { getUesList } from '@Ues/reducers/list.reducers';

import { getGradesForm } from '@Grades/reducers/form.reducers';

import * as actions from '@Grades/effects/form.effects';


const mapStateToProps = state => ({
  year: getPromotion(state).year,
  promotion: getPromotion(state).promotion,
  semesters: getSemestersList(state).semesters,
  ues: getUesList(state).ues
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
