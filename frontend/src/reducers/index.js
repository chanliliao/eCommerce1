import { combineReducers } from 'redux';
import productReducers from './productReducers';
import cartReducers from './cartReducers';

export default combineReducers({
  productList: productReducers,
  cart: cartReducers,
});
