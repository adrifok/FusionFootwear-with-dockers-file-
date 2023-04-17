const { Router } = require("express");
const {
  getUsersHandler,
  postUserHandler,
  postRegistroHandller,
  postLoginUser,
  postLoginGoogle,
 updateUser,
 updateUserDataHandler,
 updateAddressHandler,
 updatePhoneHandler,
 updateStateHandler
} = require("../handlers/userHandlers");


const { verifyToken, isAdmin } = require("../middlewares/userValidator");

const userRouter = Router();

userRouter.post("/registro", postRegistroHandller)
userRouter.post("/login", postLoginUser)
userRouter.post("/google", postLoginGoogle)
userRouter.post("/:id", postUserHandler);
userRouter.post("/google", postLoginGoogle)
userRouter.get("/", getUsersHandler);
userRouter.get("/",[verifyToken, isAdmin], getUsersHandler);
userRouter.put("/:id", updateUser);//userRouter.put("/:id", updateUser);
userRouter.put("/data/:id", updateAddressHandler, updatePhoneHandler, updateStateHandler)//[verifyToken, isAdmin]


module.exports = userRouter;

