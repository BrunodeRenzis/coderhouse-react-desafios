import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom';
const Item = ({item}) => {
  const urlDetalle = `/detalle/${item.id}`
  return (
    <div className='individualItem'>
      <p>{item.nombre}</p>
      <img src={item.imagen} alt={item.descripcion}/>
      <Link to={urlDetalle}>
        <a href="/detalle">Ver detalles</a>
      </Link>
    </div>
  )
}

export default Item