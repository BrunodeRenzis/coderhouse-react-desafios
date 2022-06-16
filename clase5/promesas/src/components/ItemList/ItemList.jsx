import React from 'react'
import Item from '../Item/Item'

const ItemList = ({items}) => {
  return (
    <div>
        {
            items.map((producto)=>{
                <Item item={producto}/>
                
            })
        }
    </div>
  )
}
export default ItemList;