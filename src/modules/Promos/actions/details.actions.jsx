import types from '@Promos/constants/details.constants';

export const fetchPromotion = (isFetching = false) => ({
  type: types.FETCHING_PROMOTIONS_DETAILS,
  payload: {
    isFetching
  }
});

export const fetchPromotionDetailsSucceed = data => ({
  type: types.FETCHING_PROMOTIONS_DETAILS_SUCCESS,
  payload: {
    promotion: data
  }
});

export const fetchPromotionDetailsFailed = error => ({
  type: types.FETCHING_PROMOTIONS_DETAILS_FAILURE,
  payload: {
    error
  }
});
