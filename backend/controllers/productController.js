import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

//@desc   Fetch all products
//@route  GET /api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
  // this is how to get the question mark
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const products = await Product.find({ ...keyword });

  res.json(products);
});

//@desc   Fetch single product
//@route  GET /api/products/:id
//@access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

//@desc   delete a product
//@route  DELETE /api/products/:id
//@access Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product does not exist');
  }
});

//@desc   update product
//@route  PUT /api/products/:id
//@access Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = req.body.name || product.name;
    product.description = req.body.description || product.description;
    product.brand = req.body.brand || product.brand;
    product.image = req.body.image || product.image;
    product.category = req.body.category || product.category;
    product.price = req.body.price || product.price;
    product.countInStock = req.body.countInStock || product.countInStock;

    const updateProduct = await product.save();

    res.json(updateProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

//@desc   Create Product
//@route  POST /api/products/
//@access Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample Name',
    price: 0,
    user: req.user._id,
    image: '/image/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

//@desc   create new review
//@route  Post /api/products/:id/reviews
//@access Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Product already review');
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: 'Review added' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
};
