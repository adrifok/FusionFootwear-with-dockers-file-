
import React from "react";


export default function CardAdmin({ id, title, price, image, marca }) {
 
  return (
    <div className="card">
    
      <img src={image} alt="" />

      <h4 className="marca">{marca.toUpperCase()}</h4>

        <h5>{title}</h5>
    
      <h5>${Number(price).toLocaleString('de-DE')}.-</h5>
    </div>
  );
}
