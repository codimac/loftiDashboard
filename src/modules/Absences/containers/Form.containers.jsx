import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from '@Absences/components/Form/Form.components';

import { getAbsencesForm } from '@Absences/reducers/form.reducers';

import * as actions from '@Absences/effects/form.effects';

const mapStateToProps = state => (getAbsencesForm(state));

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
