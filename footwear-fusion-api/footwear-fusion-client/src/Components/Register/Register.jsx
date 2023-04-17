import Zapas from "../images/login-image.jpg";
import logo from "../images/logo.png";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./authContext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registros } from "../../Redux/Actions/index";

export default function Register() {
  
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [user, setUser] = useState({
    email: "",
    password: "",
  });
  
  const [error, setError] = useState()

  const { registrarUserFirebase } = useAuth();


  const actualizarEstadouser = (evento) => {
    const { name, value } = evento.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const enviarDatos = async (evento) => {
    evento.preventDefault();
    setError("");
    try {
      const login = await registrarUserFirebase(user.email, user.password)
      await dispatch(registros(login.user.email))
      navigate("/")
    } catch (error) {
      console.log(error.code);//esto me muestra por consola el codigo del error, para poder cambiar el mensaje.
      if(error.code === "auth/invalid-email"){
        setError("correo invalido")
      }
      if(error.code === "auth/weak-password"){
        setError("la contraseña debe contener 6 caracteres")
      }
      if(error.code === "auth/email-already-in-use"){
        setError("este correo ya se encuentra registrado")
      }
    }
    
  }

  // const handleChange = ({ target: { name, value } }) => {
  //   setUser({ ...user, [name]: value });
  // };




  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await registrarUserFirebase(user.email, user.password);
  //     navigate("/");
  //   } catch (error) {
  //     setError("Por favor, ingrese un email o password correctos")
  //   }
  // };

  return (
    <div className="register-landing">
      <div className="form">
        <NavLink to={"/"}>
          <img src={logo} alt="" />
        </NavLink>
        <h1>Registrate! Tus próximas zapatillas están acá!</h1>
        {error && <p className="error">{error}</p>}
        <div>
          <form onSubmit={enviarDatos}>
            <div className="form-lab">
              <label htmlFor="">Email</label>
              <input
                onChange={actualizarEstadouser}
                type="email"
                name="email"
                id="email"
                placeholder="nombre@mail.com"
              />
              <label htmlFor="">Contraseña</label>
              <input
                onChange={actualizarEstadouser}
                type="password"
                name="password"
                id="password"
              />
            </div>
            <br />
            <button>Enviar</button>
          
          </form>
          
         
        </div>
        <div className="log-admin">
          <h6 className="ya-estas">Ya estas registrado?</h6>
          <NavLink to={"/login"}>
            <h6 className="ya-estas"> Logueate aca</h6>
          </NavLink>
        </div>
        <div className="log-admin">
          <h6>Sos Admin? </h6>
          <NavLink to={"/login-admin"}>
            <h6> Logueate aca</h6>
          </NavLink>
        </div>
      </div>
      <img className="zapas" src={Zapas} alt="" />
    </div>
  );
}