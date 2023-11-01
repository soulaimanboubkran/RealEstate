import express  from "express";
import { createListing, deleteLstings, updateListing } from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
const router = express.Router();




router.post('/create',verifyToken ,createListing)
router.delete('/delete/:id',verifyToken ,deleteLstings)

router.delete('/update/:id',verifyToken ,updateListing)






export default router;