import React from 'react'

import './ItemList.scss'
import ItemCard from '../item/ItemCard'

export default function ItemList({ data }) {
    
    if (!data) return (<div>no data</div>)
console.log(data)
  return (
      <ul className="items_list">
          {data.map((item) => (              
                  <ItemCard item={item} key={item.id} />          
          ) )
          }
        
      </ul>
  )
}
