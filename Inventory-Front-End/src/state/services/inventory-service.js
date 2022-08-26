import client from './client.js';

export async function getItems() {
  // const response = await client
  //   .from('Inventory')
  //   .select(`*`)
  // return response;
  const response = await client
  .from('Inventory')
  .select(`
    inventoryId,
    itemname,
    quantity,
    cost,
    Categories (
     category_name
    )
  `)
  console.log('me get items', response);
  return response;
}

export async function addItem(item) {
  const response = await client
    .from('Inventory')
    .insert(item)
    .single();
  return response;
}

export async function updateItem(newName, item) {
  const id = item.id;
  const updatedItem = { ...item, Name: newName };
  const response = await client
    .from('Inventory')
    .update(updatedItem)
    .match({ id })
    .single();
  return response;
}

export async function removeItem(id) {
  const response = await client
    .from('Inventory')
    .delete()
    .eq('id', id)
    .single();
  return response;
}
