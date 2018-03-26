import { connect } from 'react-redux';

import { getFilter } from '../reducers/visibilityFilter.reducers';
import { setVisibilityFilter } from '../actions/todoList.actions';
import Link from '../components/Link.components';

const mapStateToProps = (state, ownProps) => ({
  active: getFilter(state) === ownProps.filter
});

const mapDispacthToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(mapStateToProps, mapDispacthToProps)(Link);
