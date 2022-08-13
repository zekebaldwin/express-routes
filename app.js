const express = require("express");
const ExpressError = require("./error");
const { mean, median, mode } = require("./functions");
const app = express();

app.get("/mean", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError(
      "You must pass a query key of nums with a comma-separated list of numbers.",
      400
    );
  }
  let nums = req.query.nums.split(",");
  let result = {
    operation: "mean",
    result: mean(nums),
  };
  return res.send(result);
});

app.get("/median", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError(
      "You must pass a query key of nums with a comma-separated list of numbers.",
      400
    );
  }
  let nums = req.query.nums.split(",");
  let result = {
    operation: "median",
    result: median(nums),
  };
  return res.send(result);
});

app.get("/mode", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError(
      "You must pass a query key of nums with a comma-separated list of numbers.",
      400
    );
  }
  let nums = req.query.nums.split(",");
  let result = {
    operation: "mode",
    result: mode(nums),
  };
  return res.send(result);
});

app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);
  return next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  return res.json({
    error: err,
    message: err.message,
  });
});

app.listen(3000, function () {
  console.log("listening");
});
