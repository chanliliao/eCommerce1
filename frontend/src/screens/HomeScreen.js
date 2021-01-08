import React, { Fragment, useEffect } from 'react';
import Product from '../components/Product';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { listProducts } from '../actions/productAction';
import PropTypes from 'prop-types';

const HomeScreen = ({ products, listProducts }) => {
  useEffect(() => {
    listProducts();

    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

HomeScreen.propType = {
  productList: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { listProducts })(HomeScreen);
