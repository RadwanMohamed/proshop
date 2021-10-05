import  express   from "express";
import {protect} from "../middleware/authMiddleware.js";
const router = express.Router();
import {authUser,getProfile, registerUser} from "../controllers/userController.js";
router.post('/register',registerUser);
router.post('/login',authUser);
router.get('/profile',[protect],getProfile);


export default router;