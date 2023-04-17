const { Router } = require("express");
const {createFavoriteHandlers, getFovoritoHandlers, deletFavoritoHandler, deleteVaciarFavoritosHandler} = require("../handlers/favoriteHandlers");
const { verifyToken } = require("../middlewares/userValidator");

const favoriteRouters = Router();

favoriteRouters.post("/:userId/:productId", verifyToken, createFavoriteHandlers)
favoriteRouters.get("/:userId", verifyToken, getFovoritoHandlers)
favoriteRouters.delete("/:userId/:productId", verifyToken, deletFavoritoHandler)
favoriteRouters.delete("/:userId", verifyToken, deleteVaciarFavoritosHandler)

module.exports = favoriteRouters
