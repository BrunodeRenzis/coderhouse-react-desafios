import React, {useState} from 'react'
export const CounterApp = ({value,stock,onAdd}) => {
  const [counter,setCounter]=useState(value);
  const sumar = ()=>{
      if(counter<stock)
          setCounter(counter+1);
  }
  
  const restar = ()=>{
      if(counter>value)
        setCounter(counter-1);
  }  
  return (
      <div>
          <h2>{counter}</h2>
          <div className="contenedorBotones">
            <button onClick={restar}>-</button>
            <button onClick={sumar}>+</button>
            <button onClick={()=>onAdd(counter)}>Agregar al carrito</button>
          </div>
      </div>
  )


}
