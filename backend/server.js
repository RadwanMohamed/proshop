import express from "express";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import cros from "./middleware/crosMiddleware.js";
import errorMiddleware from "./middleware/errorMidlleare.js";
import productRoute  from "./routes/product.js";
dotenv.config();
connectDB();
 
const app = express();

app.use('/api/products',productRoute);
app.use(cros);

app.use(errorMiddleware);


const PORT = process.env.PORT || 5000;

app.listen(PORT , console.log(`Server running in ${process.env.NODE_ENV} on ${PORT} `))