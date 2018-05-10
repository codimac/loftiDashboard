import { connect } from 'react-redux';

import FilterInput from '@Shared/components/FilterInput/FilterInput.components';

import { getFilter } from '@Shared/reducers/filter.reducers';
import { filter, resetFilter } from '@Shared/actions/filter.actions';

const mapStateToProps = state => getFilter(state);

const mapDispatchToProps = dispatch => ({
  onChange: ev => dispatch(filter(ev.target.value)),
  resetFilter: () => dispatch(resetFilter())
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterInput);
