import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListGrades from '@Grades/components/List/List.components';


import { getGradesList } from '@Grades/reducers/list.reducers';
import * as actions from '@Grades/effects/list.effects';

const mapStateToProps = state => getGradesList(state);

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListGrades);
