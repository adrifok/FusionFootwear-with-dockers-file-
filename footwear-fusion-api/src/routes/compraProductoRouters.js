const { Router } = require("express");
const { updateCompraProductoHandler, deleteCompraProductoHandler } = require("../handlers/compraProductoHandlers");

const compraProductoRouters = Router();

// compraProductoRouters.post("/", createCompraProductoHandler)
// compraProductoRouters.get("/:cartId", getCartIdHandler)
compraProductoRouters.put("/:compraProductoId", updateCompraProductoHandler)
compraProductoRouters.delete("/:compraProductoId", deleteCompraProductoHandler)

module.exports = compraProductoRouters;