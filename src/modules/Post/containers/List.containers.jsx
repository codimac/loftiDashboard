import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListPost from '../components/List.components';

import { getPosts } from '../reducers/list.reducers';
import * as actions from '../actions/list.actions';

const mapStateToProps = state => ({
  postsList: getPosts(state)
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListPost);
