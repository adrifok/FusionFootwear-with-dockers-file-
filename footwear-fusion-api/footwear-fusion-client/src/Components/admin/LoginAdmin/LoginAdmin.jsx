import logo from "../../images/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert"


export default function LoginAdmin() {

  const [loginAdmin, setLoginAdmin] = useState({
    email: "pt10henry@gmail.com",
    password: "123"
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que la página se recargue
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (email === loginAdmin.email && password === loginAdmin.password) {
      swal("Ingreso Exitoso!", "Bienvenido", "success");
      navigate('/adminpanel'); // Redirige a la ruta del panel de administración
    } else {
      swal("Error", "Email o contraseña incorrectos", "error");
    }
  }

  return (
    <div className="login-admin">
      <img src={logo} alt="" />
      <h1>PORTAL DEL ADMINISTRADOR</h1>

      <form className="form-admin" onSubmit={handleSubmit}>
        <div className="form-lab">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="nombre@mail.com"
          />
          <label htmlFor="">Contraseña</label>
          <input type="password" name="password" id="password" />
        </div>
        <div></div>

        <button type="submit">Entrar</button>

      </form>
    </div>
  );
}

