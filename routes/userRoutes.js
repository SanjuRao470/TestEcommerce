const express = require("express");
const router = express.Router();
const userContoller = require("../controllers/userContollers");
const verifyToken = require("../middleware/middleware");
const validate = require("../Validators/UserValidators");
router.post(
  "/signup",
  validate.registrationValidationRules,
  validate.validateUser,
  userContoller.userSignup
);
router.post("/login", userContoller.userLogin);
router.post("/changePassword", verifyToken, userContoller.changePassword);
router.post('/forgetPassword',userContoller.forgetPassword)
module.exports = router;
