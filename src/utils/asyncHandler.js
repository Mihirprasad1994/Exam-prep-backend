const asyncHandler = (requestHandler) => {
  console.log("hello from asyncfunc");

  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};
console.log(asyncHandler);

export { asyncHandler };
