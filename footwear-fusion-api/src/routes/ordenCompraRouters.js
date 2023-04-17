const { Router } = require("express");
const { createOrdenCompraHandler, updateOrdenCompraHandler, getOrdenCompraHandler, deleteOrdenCompraHandler } = require("../handlers/ordenCompraHandlers");

const ordenCompraRouters = Router();

ordenCompraRouters.post("/:cartId", createOrdenCompraHandler)
ordenCompraRouters.put("/:ordenCompraId", updateOrdenCompraHandler)
ordenCompraRouters.get("/:loginUserId", getOrdenCompraHandler)
ordenCompraRouters.delete("/:ordenCompraId", deleteOrdenCompraHandler)

module.exports = ordenCompraRouters;