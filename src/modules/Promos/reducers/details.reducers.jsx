import types from '@Promos/constants/details.constants';
import promotionsDetailsListInitialState from '@Promos/states/details.states';

const promotionsDetailsReducer = (state = promotionsDetailsListInitialState, action) => {

  switch (action.type) {

    case types.FETCHING_PROMOTIONS_DETAILS:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_PROMOTIONS_DETAILS_SUCCESS:
      return {
        ...state,
        ...action.payload.data
      };

    case types.FETCHING_PROMOTIONS_DETAILS_FAILURE:
      return state;

    default:
      return state;
  }
};

export default promotionsDetailsReducer;

export const getPromotion = state => state.promotionsDetails;
