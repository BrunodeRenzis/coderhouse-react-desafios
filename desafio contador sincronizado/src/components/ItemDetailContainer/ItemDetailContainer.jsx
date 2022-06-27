import React,{useState,useEffect} from 'react';
import  productos  from '../../mock/productos';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
const ItemDetailContainer = () => {
    const {itemId} = useParams(); 
    console.log("Item id: " + itemId);
    const [producto,setProducto] = useState({})
    useEffect(()=>{
      const traerProducto = new  Promise((res,rej)=>{
        setTimeout(() => {
          let idFound = parseInt(itemId);
          const itemFound = productos.find(producto=>{
            return producto.id === idFound
          })
          if(itemFound=== undefined)
            rej("Producto No encontrado");
          else
            res(itemFound)
        }, 500);
      })
      traerProducto
      .then((res)=>{
        setProducto(res);
      })
    },[itemId]) 
    return (
      <div className=''>
        <ItemDetail item={producto}/>
      </div>
    )
}

export default ItemDetailContainer