import { useOrders } from "../../state/hooks/order.js";
import OrderItem from "./OrderItem.jsx";

export default function OrderList() {
  const { orders } = useOrders();
  if (!orders) return null;

  return (
    <span>
      <ul>
        {orders.map((order) => (
          <OrderItem key={order.orderId} order={order}/>
        ))}
      </ul>
    </span>
  );
}
