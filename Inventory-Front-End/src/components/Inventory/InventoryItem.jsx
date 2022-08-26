import React from 'react'
import './InventoryItem.css';

export default function InventoryItem({item}) {
  return (
    <li className='item'>
      <div>
        Quantity: {item.quantity}
      </div>
      <div>
        Item: {item.itemname}
      </div>
      <div>
        Category: {item.Categories.category_name}
      </div>
      <div>
        Total Cost:${item.cost * item.quantity}
      </div>
    </li>
  )
}
