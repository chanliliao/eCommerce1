import React, { Fragment, useState, useEffect } from 'react';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSingleProduct } from '../actions/productAction';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import PropTypes from 'prop-types';

const ProductScreen = ({
  match,
  history,
  getSingleProduct,
  singleProduct: { product, error, loading },
}) => {
  const [qty, setQty] = useState(1);

  useEffect(() => {
    getSingleProduct(match.params.id);
  }, [match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

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

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    className='btn-block'
                    type='button'
                    disabled={countInStock === 0}
                    onClick={addToCartHandler}
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
