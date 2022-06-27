import React,{useState,useEffect} from 'react';
import  productos  from '../../mock/productos';
import './ItemListContainer.css';
import  ItemList  from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
const ItemListContainer = ({greeting}) => {
    //useEffect no bloquea el renderizado del DOM, lo que está dentro del useEffect se va a ejecutar cuando se monte el componente.
    const [products,setProductos] = useState([])
    const {nombreCategoria} = useParams();
    useEffect(()=>{
      const traerProductos = new  Promise((res,rej)=>{
        setTimeout(() => {
          if(nombreCategoria === undefined)
            res(productos)
          else{
            const itemsFound = productos.filter(producto =>{
              return producto.categoria === nombreCategoria;
            })
            res(itemsFound);
          }
        }, 500);
      });
      traerProductos
      .then((res)=>{
        setProductos(res);
      })
    },[nombreCategoria]) 
    return (
      <div className='itemListCont'>
        <h1>{greeting}</h1>
        <ItemList items={products}/>
      </div>
    )
  }

export default ItemListContainer