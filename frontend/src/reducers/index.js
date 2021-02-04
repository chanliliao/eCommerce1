import { combineReducers } from 'redux';
import {
  productCreateReducers,
  productCreateReviewReducers,
  productDeleteReducers,
  productDetailReducers,
  productListReducers,
  productUpdateReducers,
} from './productReducers';
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
  orderListReducers,
  orderDeliverReducers,
} from './orderReducers';

export default combineReducers({
  productList: productListReducers,
  productDetails: productDetailReducers,
  productDelete: productDeleteReducers,
  productCreate: productCreateReducers,
  productUpdate: productUpdateReducers,
  productReviewCreate: productCreateReviewReducers,
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
  orderDeliver: orderDeliverReducers,
  orderListMy: orderListMyReducers,
  orderList: orderListReducers,
});
