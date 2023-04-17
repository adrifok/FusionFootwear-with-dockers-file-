const { Router } = require("express");
const { createPreferenceHandlers, feedbackHandlers } = require("../handlers/mpHandlers");
const { verifyToken } = require("../middlewares/userValidator");

const mpRouters = Router();

mpRouters.post("/create_preference",verifyToken, createPreferenceHandlers)
mpRouters.get("/feedback", feedbackHandlers)

module.exports = mpRouters