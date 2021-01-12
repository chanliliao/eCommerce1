import React, { Fragment, useEffect } from 'react';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { connect } from 'react-redux';
import { getSingleProduct } from '../actions/productAction';
import PropTypes from 'prop-types';

const ProductScreen = ({
  match,
  getSingleProduct,
  singleProduct: { product, error, loading },
}) => {
  console.log(1);

  useEffect(() => {
    console.log(2);
    getSingleProduct(match.params.id);
  }, [match]);
  console.log(4);
  console.log(product);
  const {
    image,
    name,
    rating,
    numReviews,
    price,
    description,
    countInStock,
  } = product;

  return (
    <Fragment>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={image} alt={name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={rating} text={`${numReviews} reviews`} />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${price}</ListGroup.Item>
              <ListGroup.Item>Description: {description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>{countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className='btn-block'
                    type='button'
                    disabled={countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

ProductScreen.propType = {
  getSingleProduct: PropTypes.func.isRequired,
  singleProduct: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  singleProduct: state.productList,
});

export default connect(mapStateToProps, { getSingleProduct })(ProductScreen);
