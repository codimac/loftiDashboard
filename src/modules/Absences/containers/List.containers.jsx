import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '@Absences/components/List/List.components';

import { getAbsencesList } from '@Absences/reducers/list.reducers';
import * as actions from '@Absences/effects/list.effects';

const mapStateToProps = state => getAbsencesList(state);

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
