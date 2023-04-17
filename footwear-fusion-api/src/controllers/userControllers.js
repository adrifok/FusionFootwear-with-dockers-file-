const { Role, DataUser, LoginUser, UserState } = require("../db");

const dataUserCreate = async (name, last_name, phone, address, id) => {
  const userLogiado = await LoginUser.findOne({
    where: { id: id },
  });

  const newDataUser = await DataUser.create({
    name,
    last_name,
    phone,
    address,
  });

  await newDataUser.setLoginUser(userLogiado);
  // await userLogiado.setDataUser(newDataUser)

  //Busco el usuario para devolver con el model Data y ver si se carga bien
  const userLogin = await LoginUser.findOne({
    where: { id: userLogiado.id },
    include: [
      {
        model: DataUser,
        attributes: ["name", "last_name", "phone", "address"],
      },
    ],
  });

  return userLogin;
};

const getAllUsers = async () => {
  let allUsers = await LoginUser.findAll({
    attributes: ["email", "id"],
    include: [
      {
        model: DataUser,
        attributes: ["id", "name", "last_name", "phone", "address"],
      },
      {
        model: UserState,
        attributes: ["state"],
      },
      {
        model: Role,
        attributes: ["Rol"],
      },
    ],
  });
  const user = allUsers.map((use) => {
    return (datos = {
      id: use.id,
      email: use.email,
      DataUsers: use.DataUsers,
      state: use.UserState.state,
      rol: use.Role.Rol,
    });
  });
  return user;
};

const getInfoUser = async (name) => {
  const users = await getAllUsers();
  const buscar = name.toLowerCase().trim();
  const userEmail = users.filter((user) => {
    return user.email.toLowerCase().includes(buscar);
  });
  if (userEmail.length) return userEmail;

  const dataName = users.filter((user) => {
    if (user.DataUsers) {
      return (
        user.DataUsers.filter((dato) => {
          return dato.name.toLowerCase().includes(buscar);
        }).length > 0
      );
    }
  });
  if (dataName.length) return dataName;

  const dataLast_name = users.filter((user) => {
    if (user.DataUsers) {
      return (
        user.DataUsers.filter((dato) => {
          return dato.last_name.toLowerCase().includes(buscar);
        }).length > 0
      );
    }
  });
  if (dataLast_name.length) return dataLast_name;

  const dataAddress = users.filter((user) => {
    if (user.DataUsers) {
      return (
        user.DataUsers.filter((dato) => {
          return dato.address.toLowerCase().includes(buscar);
        }).length > 0
      );
    }
  });
  if (dataAddress.length) return dataAddress;

  const state = users.filter((user) => {
    return user.state.toLowerCase().includes(buscar);
  });
  if (state.length) return state;

  const categoriUser = users.filter((user) => {
    return user.rol.toLowerCase().includes(buscar);
  });
  if (categoriUser.length) return categoriUser;

  throw new Error(
    `No se encontraron usuarios que coincidan con este dato: ${name}`
  );
};
const updateUserRole = async (userId, role) => {
  //const adminRole = await Roles.findOne({ where: { name: "admin" } }); //busco el rol del admin en la db

  const user = await LoginUser.findByPk(userId); //busco el usuario por id
  const userRole = await Role.findOne({ where: { Rol: role } });
  if (userRole) {
    user.setRole(userRole.id); //cambio el rol que ya tiene por otro
  } else {
    throw new Error("rol not found");
  }
  //console.log(user, "adri")
  return user; //usuario actualizado con nuevo rol
};

const updateUserData = async (userId, phone,address, state) => {
  try {
   
    const user = await LoginUser.findByPk(userId); //busco user por Id

    if (!user) {
      throw new Error("user not found");
    }

    let userData = await DataUser.findOne({ where: { LoginUserId: userId } }); //busco usuario por Id (REPETIDO??? linea 134)
    if (!userData) {
      userData = await DataUser.create({ LoginUserId: userId, address }); //si no hay direccion se agrega el campo
    } else {
      userData.address = address; //si ya hay un campo direccion
      await userData.save(); //se modifica dato en db
    }

    if (!userData.phone) {
      userData.phone = phone;// verifico campo telefono
      await userData.save(); //si no hay telefono se agrega el campo
    } else if (userData.phone !== phone) {
      userData.phone = phone; //si ya hay un campo telefono
      await userData.save(); //se modifica con el nuevo dato de telefono en la db
    }
    // console.log(userData, "prueba");

    let userState = await UserState.findOne({ where: { LoginUserId: userId } }); // verifico y actualizo estado de usuario
    if (!userState) {
      userState = await UserState.create({ LoginUserId: userId, state });
    } else {
      userState.state = state;
      await userState.save();
    }
     //console.log(userState, "prueba");

    return {
      positivo: true,
      message: "datos de usuario actualizados con exito",
      data: {
        userData,
        userState,
      },
    };
  } catch (error) {
    return {
      positivo: false,
      message: error.message,
    };
  }

};


module.exports = {
  dataUserCreate,
  getInfoUser,
  getAllUsers,
  updateUserRole,
  updateUserData,
};
