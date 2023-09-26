const User = require("../models/userModels");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// Register a user => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "avatars/y5j0fyoezlygd4urpttd",
      url: "https://res.cloudinary.com/drec1a41i/image/upload/f_auto,q_auto/v1/avatars/y5j0fyoezlygd4urpttd",
    },
  });
  const token = user.getJwtToken();
  res.status(201).json({
    success: true,
    token,
  });
});
