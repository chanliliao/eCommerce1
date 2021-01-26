import { combineReducers } from 'redux';
import { productDetailReducers, productListReducers } from './productReducers';
import cartReducers from './cartReducers';
import {
  userDeleteReducers,
  userDetailsReducers,
  userListReducers,
  userLoginReducers,
  userRegisterReducers,
  userUpdateProfileReducers,
  userUpdateReducers,
} from './userReducers';
import {
  orderCreateReducers,
  orderDetailsReducers,
  orderListMyReducers,
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
  userList: userListReducers,
  userDelete: userDeleteReducers,
  userUpdate: userUpdateReducers,
  orderCreate: orderCreateReducers,
  orderDetails: orderDetailsReducers,
  orderPay: orderPayReducers,
  orderListMy: orderListMyReducers,
});
