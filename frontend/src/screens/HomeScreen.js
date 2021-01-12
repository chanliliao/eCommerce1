import React, { Fragment, useEffect } from 'react';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { listProducts } from '../actions/productAction';
import PropTypes from 'prop-types';

const HomeScreen = ({ listProducts, list: { products, loading, error } }) => {
  useEffect(() => {
    listProducts();
  }, []);

  return (
    <Fragment>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Fragment>
  );
};

HomeScreen.propType = {
  listProducts: PropTypes.func.isRequired,

  products: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  list: state.productList,
});

export default connect(mapStateToProps, { listProducts })(HomeScreen);
