const { check, validationResult } = require("express-validator");
const registrationValidationRules = [
  check("username").notEmpty().withMessage("username is required"),
  check("mobilno") .isLength({ min: 10 }).withMessage("Invalid mobilno") ,
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters longs"),
  // check("confirmPassword").custom((value, { req }) => {
  //   if (value !== req.body.password) {
  //     throw new Error("password do not matched");
  //   }
  //   return true;
  // }),
  
];
const validateUser = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ errors: errors.array() });
};
module.exports = {
  registrationValidationRules,
  validateUser,
};
