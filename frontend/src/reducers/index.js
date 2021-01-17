import { combineReducers } from 'redux';
import productReducers from './productReducers';
import cartReducers from './cartReducers';
import userReducers from './userReducers';

export default combineReducers({
  productList: productReducers,
  cart: cartReducers,
  userLogin: userReducers,
});
