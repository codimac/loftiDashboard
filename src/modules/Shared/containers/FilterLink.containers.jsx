import { connect } from 'react-redux';

import FilterLink from '@Shared/components/FilterLink/FilterLink.components';

import { getFilter, resetFilter } from '@Shared/reducers/filter.reducers';
import { setVisibilityFilter } from '@Shared/actions/filter.actions';

const mapStateToProps = state => getFilter(state);

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: ev => dispatch(setVisibilityFilter(ownProps.filter)),
  resetFilter: () => dispatch(resetFilter())
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
