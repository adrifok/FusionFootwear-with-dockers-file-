const {
  dataUserCreate,
  getInfoUser,
  getAllUsers,
  updateUserRole,
  updateUserData,
} = require("../controllers/userControllers");
const {
  registreUser,
  loginUserControllers,
  loginGoogle,
} = require("../controllers/registroLoginControllers");

const postRegistroHandller = async (req, res) => {
  try {
    const { email, rol } = req.body;
    const user = await registreUser(email, rol);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "El usuario ya existe" });
  }
};

const postLoginUser = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await loginUserControllers(email);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "El usuario no existe" });
  }
};

const postLoginGoogle = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await loginGoogle(email);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postUserHandler = async (req, res) => {
  let { name, last_name, phone, address } = req.body;
  const { id } = req.params;

  try {
    let newUser = await dataUserCreate(name, last_name, phone, address, id);
    res.status(201).json(newUser);
  } catch (e) {
    res.status(404).send(e.message);
  }
};

const getUsersHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const user = name ? await getInfoUser(name) : await getAllUsers();
    res.status(201).json(user);
  } catch (e) {
    res.status(404).send(e.message);
  }
};

const updateUser = async (req, res) => {
  const userId = req.params.id; //tomo el userId de la solicitud

  const role = req.body.Rol; ///extraigo por body el roleId

  //console.log(role);

  try {
    const modificacion = await updateUserRole(userId, role);
    res.status(200).json(modificacion);
  } catch (error) {
    res.status(400).json(error.message);
  }
};


// actualizar dirección del usuario
const updateAddressHandler = async (req, res) => {
  const userId = req.params.id;
  const address = req.body.address;
  
  if (!userId || !address) {
    return res.status(400).json({ error: "datos invalidos" });
  }
  
  try {
    res.status(202).json({ message: "actualizando dirección del usuario" });
    
    const resultado = await updateUserData(userId, null, address, null);
    
    if (resultado.exitoso) {
      res.status(200).json({
        message: "dirección actualizada",
        data: resultado.data.userData.address,
      });
    } else {
      res
      .status(400)
      .json({ error: "datos invalidos", message: resultado.message });
    }
  } catch (error) {
    //res.status(404).json(error.message);
  }
};

// actualizar telefono del usuario
const updatePhoneHandler = async (req, res) => {
  const userId = req.params.id;
  const phone = req.body.phone;
  
  if (!userId || !phone) {
    return res.status(400).json({ error: "datos invalidos" });
  }
  
  try {
    res.status(202).json({ message: "actualizando teléfono del usuario" });
    
    const resultado = await updateUserData(userId, phone, null, null);
    
    if (resultado.exitoso) {
      res.status(200).json({
        message: "teléfono actualizado",
        data: resultado.data.userData.phone,
      });
    } else {
      res
      .status(400)
      .json({ error: "datos invalidos", message: resultado.message });
    }
  } catch (error) {
    //res.status(404).json(error.message);
  }
};
const updateStateHandler = async (req, res) => { // actualizar estado del usuario
  const userId = req.params.id;
  const state = req.body.state;

  if (!userId || !state) {
    return res.status(400).json({ error: "datos invalidos" });
  }

  try {
    res.status(202).json({ message: "actualizando estado del usuario" });

    const resultado = await updateUserData(userId, null, null, state);

    if (resultado.exitoso) {
      res.status(200).json({
        message: "estado actualizado",
        data: resultado.data.userState.state,
      });
    } else {
      res
        .status(400)
        .json({ error: "datos invalidos", message: resultado.message });
    }
  } catch (error) {
    //res.status(404).json(error.message);
  }
};




module.exports = {
  postUserHandler,
  getUsersHandler,
  postRegistroHandller,
  postLoginUser,
  postLoginGoogle,
  updateUser,
  updateAddressHandler,
 updatePhoneHandler,
 updateStateHandler,
 
};
