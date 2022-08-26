import client from './client.js';

export async function getItems() {
  const response = await client
  .from('Inventory')
  .select(`
    inventoryId,
    )
  `)
  .order('inventoryId')
  return response;
}

export async function updateOrder(completed, orderId, original) {
    const newCompleted = Number(original) + Number(completed);
  const response = await client
    .from('Orders')
    .upsert({ 'orderId': orderId, completed: newCompleted });
  return response;
}

export async function getOrders() {
    const response = await client
    .from('Orders')
    .select(`
      orderId,
      date,
      label,
      orderquantity,
      completed,
      Users (name),
      Inventory(itemname)
      )
    `)
    .order('orderId')
    return response;
  }
  

export async function addOrder(order) {
  const response = await client
    .from('Orders')
    .insert(order)
    .single();
  return response;
}

export async function getIdOfInventory(inventory) {
  const response = await client
    .from('Inventory')
    .select('inventoryid')
    .match({'inventory_name': inventory})
    .single();
  return response.body.inventoryid;
}

export async function removeOrder(id) {
  const response = await client
    .from('Orders')
    .delete()
    .eq('orderId', id)
    .single();
  return response;
}
