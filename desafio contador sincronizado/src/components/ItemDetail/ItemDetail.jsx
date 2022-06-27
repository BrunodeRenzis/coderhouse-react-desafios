import React from 'react'
import './ItemDetail.css';
import { CounterApp } from '../Counter/Counter';
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
const ItemDetail = ({item}) => {
  const [cant,setCant] = useState(0);
  let navigate = useNavigate();
  const onAdd = (cantidad)=>{
    setCant(cantidad);
    item.stock-=cantidad;
    navigate('/cart');
  }  
  return (
      <div className='itemDetail'>
          <div id='contenedorImagenItem'>
            <img src={item.imagen} alt=""  id='imgDetalle'/>
          </div>
          <div id="contenedorDescripcionItem">
            <div id="contenedorNombre">
              <h2 id='nombreDetalle'>Nombre producto: {item.nombre}</h2>
            </div>
            <div id="contenedorDescripcion">
              <span id='descripcionItem'>Descripcion: {item.descripcion}</span>
            </div>
            <div id="contenedorUnidades">
              <span id='unidadesItem'>Unidades disponibles: {item.stock}</span>
            </div>
            <div id="contenedorPrecio">
              <span id='precioItem'>Precio: {item.precio}</span>
            </div>
            {
              cant===0?(<CounterApp value={1} stock={item.stock} onAdd={onAdd}/>):(<Link to="/cart">Ir al carrito</Link>)
            }        

          </div>
      </div>
    )
  }

export default ItemDetail