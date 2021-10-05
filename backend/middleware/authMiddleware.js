import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { errorResponse } from "../helper/utils.js";
import expressAsyncHandler from "express-async-handler";

const protect = expressAsyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
        errorResponse(res, {}, 403, "not authorized");
    }
  }
  if (!token) {
    errorResponse(res, {}, 403, "not authorized");
  }
});
export {protect};