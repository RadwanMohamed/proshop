import asyncHandler from "express-async-handler";
import User from "../models/user.js";
import { errorResponse, successResponse } from "../helper/utils.js";
import generateToken from "../helper/generateToken.js";
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("-__v");
  if (user && (await user.matchPassword(password))) {
    successResponse(res, { ...user._doc, token: generateToken(user._id) });
  } else {
    errorResponse(res, {}, 401, "invalid Email or Password");
  }
});
const registerUser = asyncHandler(async (req, res) => {
  const { email, password, name } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) errorResponse(res, {}, 400, "user already exists");
  const user = await User.create({
    name,
    email,
    password,
  });
  successResponse(
    res,
    { ...user._doc, token: generateToken(user._id) },
    "",
    201
  );
});
const getProfile = (req, res) => {
  const user = req.user;
  if (user) {
    successResponse(res, user);
  } else {
    errorResponse(res, {}, 401, "not user");
  }
};
const updateUserProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    errorResponse(res,{},404,"user not found");
  }
  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  if(req.body.password){
    user.password = req.body.password;
  }
  const updatedUser = await user.save();
  successResponse(
    res,
    { ...user._doc, token: generateToken(user._id) },
    "",
    200
  );
});
export { authUser, getProfile, registerUser,updateUserProfile };
