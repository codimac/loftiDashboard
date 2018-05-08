import { connect } from 'react-redux';

import Filter from '@Shared/components/Filter/Filter.components';

import { getFilter } from '@Shared/reducers/filter.reducers';
import * as actions from '@Shared/actions/filter.actions';

const mapStateToProps = state => getFilter(state);

const mapDispatchToProps = dispatch => ({
  onChange: ev => dispatch(actions.filter(ev.target.value)),
  resetFilter: () => dispatch(actions.resetFilter())
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
