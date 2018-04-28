import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DetailsPromotion from '@Promos/components/Details/Details.components';

import { getPromotion } from '@Promos/reducers/details.reducers';
import * as actions from '@Promos/effects/details.effects';

const mapStateToProps = state => getPromotion(state);

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPromotion);
