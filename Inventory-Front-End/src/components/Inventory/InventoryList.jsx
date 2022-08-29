import { useItems } from "../../state/hooks/inventory.js";
import InventoryItem from "./InventoryItem.jsx";

export default function InventoryList() {
  const { items } = useItems();
  if (!items) return null;

  return (
    <span>
      <ul>
        {items.map((inventory) => (
          <InventoryItem key={inventory.inventoryId} item={inventory}/>
        ))}
      </ul>
    </span>
  );
}
