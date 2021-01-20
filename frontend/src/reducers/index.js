import { combineReducers } from 'redux';
import { productDetailReducers, productListReducers } from './productReducers';
import cartReducers from './cartReducers';
import {
  userDetailsReducers,
  userLoginReducers,
  userRegisterReducers,
  userUpdateProfileReducers,
} from './userReducers';
import {
  orderCreateReducers,
  orderDetailsReducers,
  orderPayReducers,
} from './orderReducers';

export default combineReducers({
  productList: productListReducers,
  productDetails: productDetailReducers,
  cart: cartReducers,
  userLogin: userLoginReducers,
  userRegister: userRegisterReducers,
  userDetails: userDetailsReducers,
  userUpdateProfile: userUpdateProfileReducers,
  orderCreate: orderCreateReducers,
  orderDetails: orderDetailsReducers,
  orderPay: orderPayReducers,
});
