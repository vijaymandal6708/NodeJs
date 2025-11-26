import express from "express";
import StuController from "../conrollers/stuController.js"
const router = express.Router();

router.get("/getsessioninfo", StuController.get_session_info);
router.get("/deletesession", StuController.delete_session);


export default router;