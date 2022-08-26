import React, { useState } from 'react'
import { addItem, getIdOfCategory } from '../../state/services/inventory-service';
import { FormButton, InputControl } from '../Forms/FormControl';

export default function AddInventory() {
  const [editing, setEditing] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState('');
  const [itemName, setItemName] = useState('');
  const [cost, setCost] = useState('');
  const handleQuantity = ({ target }) => setQuantity(target.value);
  const handleCategory = ({ target }) => setCategory(target.value);
  const handleItemName = ({ target }) => setItemName(target.value);
  const handleCost = ({ target }) => setCost(target.value);

  function toggleEdit() {
    setEditing(!editing);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const computedCategory = await getIdOfCategory(category);
    await addItem({ itemname: itemName, categoryid: computedCategory, quantity: quantity, cost: cost})
    //TODO: category needs to be a dropdown
    //it even all works. literally just needs category to be dropdown
    setQuantity(0);
    setCost(0);
    setCategory('');
    setItemName('');
  };

  return (
    <div>
    <form className='inventoryAddForm' onSubmit={handleSubmit}>
      <InputControl
        type={'number'}
        label={'quantity'}
        value={quantity}
        onChange={handleQuantity}
      />
      <InputControl
        type={'dropdown'}
        label={'category'}
        value={category}
        onChange={handleCategory}
      />
      <InputControl
        type={'number'}
        label={'cost'}
        value={cost}
        onChange={handleCost}
      />
      <InputControl
        type={'string'}
        label={'item name'}
        value={itemName}
        onChange={handleItemName}
      />
      
      <FormButton>Add</FormButton>
    </form>
      <button onClick={toggleEdit} id='AddInventoryButton'>Add Item</button>
    </div>
  )
}
