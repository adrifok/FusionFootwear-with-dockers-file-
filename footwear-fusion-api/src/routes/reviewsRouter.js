const { Router } = require("express");
const { createReviewsHandler } = require("../handlers/reviewsHandler");
const { verifyToken } = require("../middlewares/userValidator");

const reviewsRouter = Router();

reviewsRouter.post("/:productId",verifyToken, createReviewsHandler);


module.exports = reviewsRouter;