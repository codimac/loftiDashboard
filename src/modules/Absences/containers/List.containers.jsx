import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '@Absences/components/List/List.components';

import { getPromotion } from '@Promos/reducers/details.reducers';

import * as actions from '@Absences/effects/list.effects';

const mapStateToProps = state => ({
  promotion: getPromotion(state).promotion,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
