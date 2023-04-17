require("dotenv").config();
const jwt = require("jsonwebtoken");
const {LoginUser, Role} = require("../db");
const { SECRET } = process.env;

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (!token) return res.status(401).json({ message: "no token provided" }); //si el usuario no envia x-access-token, error

    const tokenUser = jwt.verify(token, SECRET); //extraigo lo que esta dentro del token
    
    req.userId = tokenUser.id;

    const user = await LoginUser.findByPk(req.userId); //no preciso la contraseña
    
    if (!user) return res.status(404), json({ message: "user not found" });

    next();

  } catch (error) {
    return res.status(404).json({ message: "unauthorized" });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    
    const user = await LoginUser.findByPk(req.userId);
    
    if (!user) return res.status(404).json({ message: "user not found" });

    const UserRol = await Role.findByPk(user.RoleId); // busco el rol del usuario
   
    if (UserRol.Rol !== "admin") return res.status(401).json({ message: "administrator role required" });
    console.log("rol",UserRol.Rol);
      
    next();
  } catch (error) {
    return res.status(500).json({ message: "error" });
  }
};

module.exports = {
    verifyToken,
    isAdmin
}