// Step 1 import .....
const express = require("express");
const router = express.Router();
// import controller
const { listMember,updateMember,removeMember } =require('../controllers/member')
// @ENDPOINT http://localhost:5000/api/member
// @ACCESS Private
router.get("/member", listMember);
router.patch("/member/:memberId",updateMember);
router.delete("/member/:memberId",removeMember)

// Step 2 Export....
module.exports = router;
