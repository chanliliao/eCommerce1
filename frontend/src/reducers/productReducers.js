import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../constants/productTypes';

export const productListReducers = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, products: [], loading: true };
    case PRODUCT_LIST_SUCCESS:
      return {
        products: action.payload,
        loading: false,
      };
    case PRODUCT_LIST_FAIL:
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const productDetailReducers = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        product: action.payload,
        loading: false,
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
