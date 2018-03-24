import Http from '@shared/Http';
import types from '../constants';

export const fetchPosts = isLoading => ({
  type: types.FETCHING_DATA,
  payload: {
    isLoading
  }
});

export const fetchPostsSucceed = posts => ({
  type: types.FETCHING_DATA_SUCCESS,
  payload: {
    posts
  }
});

export const fetchPostsFailed = error => ({
  type: types.FETCHING_DATA_FAILURE,
  payload: {
    error
  }
});

export const getData = () => dispatch => {
  dispatch(fetchPosts(true));
  Http.get('posts')
    .then(res => dispatch(fetchPostsSucceed(res.data)))
    .then(dispatch(fetchPosts(false)))
    .catch(err => dispatch(fetchPostsFailed(err)))
};
