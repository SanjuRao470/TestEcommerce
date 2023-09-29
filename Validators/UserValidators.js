const { check, validationResult } = require("express-validator");
const registrationValidationRules = [
  check("name").notEmpty().withMessage("Name is required"),
  check("email").isEmail().withMessage("Invalid email").normalizeEmail(),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters longs"),
  check("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("password do not matched");
    }
    return true;
  }),
  check("tc")
    .isBoolean()
    .withMessage("Acceptance of terms and conditions is required"),
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
