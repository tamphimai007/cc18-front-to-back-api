// Step 1 import ..................
const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth");
const {
  registerValidator,
  loginValidator,
} = require("../middlewares/validator");

// @ENDPOINT http://localhost:5000/api/register
// @ACCESS Public
router.post("/register",registerValidator ,register);
router.post("/login",loginValidator, login);

// Step 2 Export module
module.exports = router;
