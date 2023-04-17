import { useSelector } from "react-redux";
import cuenta from "../images/f.png";
import { useState } from "react";

export default function UserAccount() {
  const user = useSelector((state) => state.loginUser);

  const [showNameInput, setShowNameInput] = useState(false);
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [showAddressInput, setShowAddressInput] = useState(false);

  return (
    <div className="user-content">
      <div className="user-data">
        <img src={cuenta} alt="footwear-fusion" />
        {user && user.email ? (
          <div className="data-list">
            <h6>INFORMACIÓN DE LA CUENTA</h6>

            <p>{user.email}</p>
            <br />

            <h6>SUSCRIPCIONES</h6>
            <p>Todavía no está suscripto al newsletter</p>
            <br />

            <h6>DATOS DE CONTACTO</h6>
            <p>
              {showNameInput ? (
                <div>
                  <input type="text" placeholder="Nombre y Apellido" />
                  <button>Guardar</button>
                </div>
              ) : (
                <span>{user.name ? user.name : "Falta Nombre y Apellido"}</span>
              )}
              <button
                className="modif-dato"
                onClick={() => setShowNameInput(true)}
              >
                Modificar Nombre y Apellido
              </button>{" "}
              <br />
              {showPhoneInput ? (
                <div>
                  <input type="text" placeholder="Teléfono" />
                  <button>Guardar</button>
                </div>
              ) : (
                <span>{user.name ? user.name : "Falta Teléfono"}</span>
              )}
              <button
                className="modif-dato"
                onClick={() => setShowPhoneInput(true)}
              >
                Modificar Teléfono
              </button>{" "}
              <br />
              {showAddressInput ? (
                <div>
                  <input type="text" placeholder="Dirección" />
                  <button>Guardar</button>
                </div>
              ) : (
                <span>{user.name ? user.name : "Falta Dirección"}</span>
              )}
              <button
                className="modif-dato"
                onClick={() => setShowAddressInput(true)}
              >
                Modificar Dirección
              </button>
            </p>
          </div>
        ) : (
          <div className="zapato-fav">
            <h1>NO HAY NADIE</h1>
          </div>
        )}
      </div>
    </div>
  );
}
