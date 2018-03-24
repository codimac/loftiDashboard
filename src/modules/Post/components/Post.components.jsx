import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';

import { getPosts } from '../reducers/post.reducers';
import * as actions from '../actions';

class Post extends React.Component {

  static propTypes = {
    // dispatch: PropTypes.func.isRequired,
    // posts: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <h1>Posts</h1>
    );
  }

}

const mapStateToProps = state => ({
  posts: getPosts(state)
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Post);
