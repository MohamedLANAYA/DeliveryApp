import express from 'express';
import authMiddleware from "../middleware/auth.js"

import { placeOrder ,verifyOrder,userOrder,listOrder,updateStatus} from '../controllers/orderControllers.js';

const orderRouter = express.Router();

orderRouter.post('/place', authMiddleware, placeOrder,listOrder);

orderRouter.post('/verify', verifyOrder);

orderRouter.post('/userorders',authMiddleware, userOrder);  
orderRouter.get('/list',listOrder)
orderRouter.post('/status',updateStatus)

export default orderRouter;