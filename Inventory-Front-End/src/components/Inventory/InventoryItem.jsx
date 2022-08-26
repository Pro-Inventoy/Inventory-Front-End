import React from 'react'

export default function InventoryItem({item}) {
  return (
    <li>
      {item.inventoryId} {item.quantity} {item.itemname} {item.categoryId} {item.cost}
    </li>
  )
}
