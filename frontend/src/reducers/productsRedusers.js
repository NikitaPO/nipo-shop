import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constans/productConstans";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { load: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { load: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { load: false, error: action.payload };
    default:
      return state;
  }
};
