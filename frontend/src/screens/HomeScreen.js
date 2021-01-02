import React, { Fragment } from 'react';
import Products from '../products';
import Product from '../components/Product';
import { Row, Col } from 'react-bootstrap';

const HomeScreen = () => {
  return (
    <Fragment>
      <h1>Latest Products</h1>
      <Row>
        {Products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} key={product.id} />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default HomeScreen;
