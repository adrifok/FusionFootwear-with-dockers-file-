import React from 'react'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetailAdmin } from '../../../../Redux/Actions';
import { useParams } from 'react-router-dom';

export default function DetailAdmin() {
  const { prodId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailAdmin(prodId));
  }, [dispatch, prodId]);

  const prod = useSelector((state) => state.detailAdmin);

  const marca = prod.MarcaProducts
  ? prod.MarcaProducts.filter((m) => m && m.name)
      .map((m) => m.name)
      .toString()
  : "Zapatillas";

  return (
    <div className='detail-admin'>
     
        <img
          src={prod.image}
          alt={prod.title}
         
        />
   
      <div className="detail-der">
        <h1>{marca}</h1>
        <h2>{prod.title}</h2>
        <h3>${Number(prod.price).toLocaleString("de-DE")}.-</h3>
        <div className="options">
         
        </div>
        <div className="description">
          <h5>DETALLES DEL PRODUCTO</h5>
          <p>{prod.description}</p>
        </div>
      </div>
    </div>
  )
}
