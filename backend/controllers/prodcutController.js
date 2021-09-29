import Product from "../models/product.js";
import { errorResponse, successResponse } from "../helper/utils.js";
import asyncHandler from 'express-async-handler'
const getAllProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find({});
  console.log(products);
  successResponse(res, products);
});
const getProduct = asyncHandler (async(req, res, next) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
     return errorResponse(res,"product not found",404);
    }
    successResponse(res,product);

});
export default {
    getAllProducts,
    getProduct
};
