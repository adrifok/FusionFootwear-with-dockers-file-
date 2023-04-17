import { NavLink } from "react-router-dom";
import promos from "../images/promos.jpg";
import { useSelector } from "react-redux";
import axios from "axios";



export default function Cart() {
  const item = useSelector((state) => state.item);
  console.log(item, 'item del cart');


  const totalPrice = item.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const mercadoPago = () => {
    const token = localStorage.getItem("token");
        const headers = { 
          'x-access-token': token,
      };
    axios.post("http://localhost:3001/mp/create_preference",item,{headers})
      .then((res) => (window.location.href = res.data.global.init_point))
      .catch((error) => console.log(error))
  }


  return (
     <div className="cart">
      <div className="cart-header">
        <div>
          <h3>CARRITO DE COMPRAS</h3>
          <p>{item.length} PRODUCTOS</p>
        </div>
        <button>TERMINAR DE COMPRAR</button>
      </div>

      {item && item.length > 0 ? (
        item.map((e) => (
          <div className="zapato" key={e.code}>
            <img src={e.image} alt="zapato" />
            <div className="zapato-datos">
              <p>
                <strong>{e.marca}</strong>
                <br />
                {e.title}
              </p>
              <span>Código del artículo: {e.code}</span>
              <p>Talle: {e.talle}</p>
              <div className="sel-cant">
                <p>
                  Cantidad <b>{e.qty}</b>
                </p>
              </div>
              <button className="eliminar"><small>eliminar</small></button>
            </div>
            <div className="zapato-precio">
              <h2>Precio</h2>
              <h2>${e.price.toLocaleString("de-De")}</h2>
            </div>
            
          </div>
        ))
      ) : (
        <div className="zapato">
          <h1>TODAVIA NO HAY PRODUCTOS</h1>
        </div>
      )}

      <div className="cart-footer">
        <img src={promos} alt="" />
        <div className="ahora-si">
        <h1>Total: ${totalPrice.toLocaleString("de-De")}</h1>
          <button onClick={mercadoPago}>COMPRAR</button>
          <NavLink to={"/"}>
            <button className="favs">Continuar comprando...</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}