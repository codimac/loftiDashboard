import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
import DetailsStudent from '@Students/components/Details/Details.components';

import { getStudent } from '@Students/reducers/details.reducers';
import * as actions from '@Students/effects/details.effects';

const mapStateToProps = state => getStudent(state);

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DetailsStudent);
