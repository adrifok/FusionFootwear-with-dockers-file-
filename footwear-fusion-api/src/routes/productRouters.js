const { Router } = require("express");
const { createProductHandler, getProductHandler, getProductIdHandler, updateProductHandler, productPunctuationHandler } = require("../handlers/productHandlers");
const { validateProduct} = require("../middlewares/productValidator");
const { verifyToken, isAdmin } = require("../middlewares/userValidator");

const productRouter = Router();

productRouter.post("/",createProductHandler)
productRouter.get("/", getProductHandler)
productRouter.get("/punctuation",productPunctuationHandler)
productRouter.get("/:pruductId", getProductIdHandler)
productRouter.put("/:pruductId",[ verifyToken, isAdmin], updateProductHandler)

module.exports = productRouter;
