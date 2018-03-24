import types from '../constants';
import postsInitialState from '../states';

const postReducer = (state = postsInitialState, action) => {

  switch (action.type) {

    case types.FETCHING_DATA:
      console.log('on va recup');
      return state;

    case types.FETCHING_DATA_SUCCESS:
      console.log('data', action.payload)
      return state;

    case types.FETCHING_DATA_FAILURE:
      return state;

    default:
      return state;
  }

};

export default postReducer;

export const getPosts = state => state.posts;
