import { asyncHandler } from "../utils/asyncHandler.js";
console.log("hello from usercontroller");

const registerUser = asyncHandler(async (req, res) => {
  console.log("response send");
  res.status(200).json({
    message: "ok",
  });
});
console.log("bye from usercontroller");
export { registerUser };
