import types from '../constants/list.constants';
import postsInitialState from '../states/list.states';

const postListReducer = (state = postsInitialState, action) => {

  switch (action.type) {

    case types.FETCHING_DATA:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_DATA_FAILURE:
      return state;

    default:
      return state;
  }

};

export default postListReducer;

export const getPosts = state => state.list_posts;
