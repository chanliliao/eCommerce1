import { combineReducers } from 'redux';
import { productDetailReducers, productListReducers } from './productReducers';
import cartReducers from './cartReducers';
import { userLoginReducers, userRegisterReducers } from './userReducers';

export default combineReducers({
  productList: productListReducers,
  productDetail: productDetailReducers,
  cart: cartReducers,
  userLogin: userLoginReducers,
  userRegister: userRegisterReducers,
});
