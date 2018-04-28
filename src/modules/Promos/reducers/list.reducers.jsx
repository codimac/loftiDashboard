import types from '@Promos/constants/list.constants';
import promotionsListInitialState from '@Promos/states/list.states';

const promotionsListReducer = (state = promotionsListInitialState, action) => {

  switch (action.type) {

    case types.FETCHING_PROMOTIONS_LIST:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_PROMOTIONS_LIST_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_PROMOTIONS_LIST_FAILURE:
      return state;

    default:
      return state;

  }
};

export default promotionsListReducer;

export const getPromotionsList = state => state.promotionsList;
