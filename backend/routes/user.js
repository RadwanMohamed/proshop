import  express   from "express";
import {protect} from "../middleware/authMiddleware.js";
const router = express.Router();
import {authUser,getProfile, registerUser, updateUserProfile} from "../controllers/userController.js";
router.post('/register',registerUser);
router.post('/login',authUser);
router.get('/profile',[protect],getProfile);
router.put('/',[protect],updateUserProfile);


export default router;