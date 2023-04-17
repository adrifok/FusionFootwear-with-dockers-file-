import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../Redux/Actions";
import CardAdmin from "./CardAdmin/CardAdmin";
import { NavLink } from "react-router-dom";

export default function ProductManage() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="admin-content">
      <h1>PRODUCTOS</h1>
      <div className="content-prod">
      {allProducts?.map((p) => {
        return (
         <NavLink to={`/admin/product/${p.id}`} key={p.id}>
           <CardAdmin
            key={p.id}
            id={p.id}
            title={p.title}
            price={p.price}
            image={p.image}
            marca={p.MarcaProducts[0].name}
          />
         </NavLink>
        );
      })}
      </div>
    </div>
  );
}
