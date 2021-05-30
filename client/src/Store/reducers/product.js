import {
  GET_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  CHANGE_TOTAL_PRODUCT,
} from "../type";

const initialState = {
  products: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      const getProduct = { ...state, products: action.payload };
      return getProduct;
    case ADD_PRODUCT:
      const addProduct = {
        ...state,
        products: state.products.concat(action.payload),
      };
      return addProduct;
    case UPDATE_PRODUCT:
      let data = { ...state };
      let product = data.products;
      const updatedProductId = (product) => product.id === action.payload.id;
      const unUpdatedProductId = (product) => product.id !== action.payload.id;
      const productIndex = product.findIndex(updatedProductId);
      product[productIndex] = action.payload;
      const updatedProduct = {
        ...state,
        products: state.products
          .filter(unUpdatedProductId)
          .concat(product[productIndex]),
      };
      return updatedProduct;
    case DELETE_PRODUCT:
      const deletedProductId = (product) => product.id !== action.payload.id;
      const deleteProduct = {
        ...state,
        products: state.products.filter(deletedProductId),
      };
      return deleteProduct;
    case CHANGE_TOTAL_PRODUCT:
      let ctData = { ...state };
      let ctProduct = ctData.products;
      const updatedCTProductId = (product) => product.id === action.payload.id;
      const unUpdatedCTProductId = (product) =>
        product.id !== action.payload.id;
      const ctProductIndex = ctProduct.findIndex(updatedCTProductId);
      ctProduct[ctProductIndex].total =
        ctProduct[ctProductIndex].total - action.payload;
      const updateCTProduct = {
        ...state,
        products: state.products
          .filter(unUpdatedCTProductId)
          .concat(ctProduct[ctProductIndex]),
      };
      return updateCTProduct;
    default:
      return state;
  }
};

export default reducer;
