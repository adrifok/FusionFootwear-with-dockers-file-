import shoe from "../images/shoe.png";

export default function UserOrders() {
  return (
    <div className="user-content">
      <div className="user-data">
        <img src={shoe} alt="footwear-fusion" />
        <div className="data-list">
          <h6>MIS PEDIDOS REALIZADOS</h6>
          <div className="zapato-fav">
            <h1>TODAVIA NO HAY PEDIDOS REALIZADOS</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
