import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '@Absences/components/List/List.components';

import { getAbsencesList } from '@Absences/reducers/list.reducers';
import { getPromotion } from '@Promos/reducers/details.reducers';

import * as actions from '@Absences/effects/list.effects';

const mapStateToProps = state => ({
  year: getPromotion(state).year,
  promotion: getPromotion(state).promotion,
  absences: getAbsencesList(state).absencesList
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
