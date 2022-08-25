import { useContext, useEffect, useState } from 'react';
import { ItemContext } from '../context/inventoryContext.jsx';
import {
  getItems,
  addItem,
  updateItem,
  removeItem,
} from '../services/inventory-service.js';
import { showSuccess, showError } from '../services/toaster.js';

export function useItems() {
  const [error, setError] = useState(null);
  const [ items, setItems ] = useState(null);

  useEffect(() => {
    let ignore = false;

    const fetch = async () => {
      const { data, error } = await getItems();
      if (ignore) return;

      if (error) {
        setError(error);
      }
      if (data) {
        setItems(data);
      }
    };

    fetch();
    return () => (ignore = true);
  }, []);

  return { items, error };
}

function createDispatchActions(dispatch) {
  return function createAction({ service, type, success }) {
    return async (...args) => {
      const { data, error } = await service(...args);

      if (error) showError(error.message);

      if (data) {
        dispatch({ type, payload: data });
        const successMessage = success(data);
        showSuccess(successMessage);
      }
    };
  };
}

export function useItemActions() {
  const { itemDispatch } = useContext(ItemContext);

  const createAction = createDispatchActions(itemDispatch);

  const add = createAction({
    service: addItem,
    type: 'add',
    success: (data) => `Added ${data.itemname}`,
  });

  const update = createAction({
    service: updateItem,
    type: 'update',
    success: (data) => `Updated ${data.itemname}`,
  });

  const remove = createAction({
    service: removeItem,
    type: 'remove',
    success: (data) => `Removed ${data.itemname}`,
  });
  return { add, update, remove };
}
