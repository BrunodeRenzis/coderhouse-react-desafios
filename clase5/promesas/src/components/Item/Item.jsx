import React from 'react'

const Item = ({item}) => {
  return (
    <div>
        <h2>{item.nombre}</h2>
        <h2>{item.precio}</h2>
    </div>
  )
}

export default Item