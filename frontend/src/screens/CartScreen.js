import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import { addToCart } from '../actions/cartAction';
import PropTypes from 'prop-types';
import Message from '../components/Message';

const CartScreen = ({
  match,
  location,
  history,
  addToCart,
  cart: { cartItems },
}) => {
  console.log(cartItems);
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  useEffect(() => {
    if (productId) {
      addToCart(productId, qty);
    }
  }, [productId, qty]);

  return <div>cart</div>;
};

CartScreen.propType = {
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { addToCart })(CartScreen);
