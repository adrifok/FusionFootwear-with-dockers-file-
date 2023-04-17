const { Router } = require("express");
const { registroNewsletter, getNewsletterHandlers } = require("../handlers/newsletterHandlers");
const { verifyToken, isAdmin } = require("../middlewares/userValidator");
const newsletterRouter = Router();

newsletterRouter.post("/", registroNewsletter);
newsletterRouter.get("/", [verifyToken, isAdmin], getNewsletterHandlers);

module.exports = newsletterRouter;
