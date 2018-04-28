import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListPromotions from '@Promos/components/List/List.components';

import { getPromotionsList } from '@Promos/reducers/list.reducers';
import * as actions from '@Promos/effects/list.effects';

const mapStateToProps = state => getPromotionsList(state);

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListPromotions);
