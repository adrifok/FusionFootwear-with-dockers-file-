
import { useDispatch } from "react-redux";
import medios from "../images/mediosdepago.png";
import { useState } from "react";
import { correoRegistroNewsletter, postNewsletter } from "../../Redux/Actions";
import { html } from "./correo";
import swal from "sweetalert";

export default function Footer() {
  const dispatch = useDispatch()

  const [email, setEmail] = useState({
    email: ""
  });

  const correo = {
    email: email.email, 
    subject:"Bienvenido al newsletter de FOOTWEAR FUSION",
    html: html
}

  const capturarEmail = (evento) => {
    const { name, value } = evento.target;
    setEmail({
      ...email,
      [name]: value
    });
  };

  const newEmail = async ()=> {
    swal("Ya estas registrado!", "Vas a recibir un correo de confirmacion","success")
    setTimeout(() => {
      window.location.reload()
    }, 3000);
    await dispatch(postNewsletter(email))
    await dispatch(correoRegistroNewsletter(correo))
  }
  
  return (
    <div className="footer">

      <div>
        <h5>MEDIOS DE PAGO</h5>
        <img src={medios} alt="" />
      </div>

        <h5>Suscribite a nuestro Newsletter y no te pierdas las novedades!</h5>
        <input type="text" name="email"  placeholder="Ingresa tu email..." onChange={capturarEmail}/>
        <button className="enviar" onClick={newEmail}>Enviar</button>

    </div>
  );
}
