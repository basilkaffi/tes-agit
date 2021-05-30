import {
  GET_ITEM,
  ADD_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  DELETE_BULK_ITEM,
} from "../type";

const initialState = {
  items: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEM:
      const getItems = { ...state, items: action.payload.items };
      return getItems;
    case ADD_ITEM:
      const addItems = {
        ...state,
        items: state.items.concat(action.payload),
      };
      return addItems;
    case UPDATE_ITEM:
      let data = { ...state };
      let orderedItem = data.items;
      const updatedItemId = (item) => item.id === action.payload.id;
      const unUpdatedItemId = (item) => item.id !== action.payload.id;
      const itemIndex = orderedItem.findIndex(updatedItemId);
      orderedItem[itemIndex].total = action.payload.total;
      const updateItems = {
        ...state,
        items: state.items
          .filter(unUpdatedItemId)
          .concat(orderedItem[itemIndex]),
      };
      return updateItems;
    case DELETE_ITEM:
      const deletedItemId = (item) => item.id !== action.payload.id;
      const deleteItems = {
        ...state,
        items: state.items.filter(deletedItemId),
      };
      return deleteItems;
    case DELETE_BULK_ITEM:
      const emptyItems = {
        ...state,
        items: [],
      };
      return emptyItems;
    default:
      return state;
  }
};

export default reducer;
