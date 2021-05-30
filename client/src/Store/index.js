import { createStore, combineReducers, applyMiddleware } from 'redux';
import item from './reducers/item';
import product from './reducers/product';
import user from './reducers/user';
import  thunk from 'redux-thunk';

const reducer = combineReducers({
  item,
  product,
  user
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;