import { connect } from 'react-redux';

import FilterRange from '@Shared/components/FilterRange/FilterRange.components';

import { getFilter } from '@Shared/reducers/filter.reducers';
import {filterGrades, resetFilter } from '@Shared/actions/filter.actions';

const mapStateToProps = state => getFilter(state);

const mapStateToDispatch = dispatch => ({
  onChange: value => dispatch(filterGrades(value)),
  resetFilter: () => dispatch(resetFilter())
});

export default connect(mapStateToProps, mapStateToDispatch)(FilterRange);
