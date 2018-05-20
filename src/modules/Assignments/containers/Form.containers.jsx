import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from '@Assignments/components/Form/Form.components';

import { getPromotionsList } from '@Promos/reducers/list.reducers';
import { getPromotion, getPromotionId } from '@Promos/reducers/details.reducers';
import { getSemestersList } from '@Semesters/reducers/list.reducers';
import { getUesList } from '@Ues/reducers/list.reducers';
import { getAssignmentsDetails } from '@Assignments/reducers/details.reducers';
import { getSubjectsList } from '@Subjects/reducers/list.reducers';

import * as actions from '@Assignments/effects/form.effects';


const mapStateToProps = state => ({
  year: getPromotionId(state),
  promotion: getPromotion(state).promotion,
  semesters: getSemestersList(state).semesters,
  ues: getUesList(state).ues,
  assignment: getAssignmentsDetails(state).assignment,
  subjects: getSubjectsList(state).subjects
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
