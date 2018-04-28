import types from '@Promos/constants/list.constants';

export const fetchPromotionsList = (isFetching = true) => ({
  type: types.FETCHING_PROMOTIONS_LIST,
  payload: {
    isFetching
  }
});

export const fetchPromotionsListSucceed = data => ({
  type: types.FETCHING_PROMOTIONS_LIST_SUCCESS,
  payload: {
    promotionsList: data
  }
});

export const fetchPromotionsListFailed = error => ({
  type: types.FETCHING_PROMOTIONS_LIST_FAILURE,
  payload: {
    error
  }
});
