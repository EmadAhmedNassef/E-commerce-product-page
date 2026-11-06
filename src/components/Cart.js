import Image from "next/image";
import { IconTrash } from "@tabler/icons-react";
import { products } from "./productData";

export default function Cart({ quantity, onDelete, mobile = false }) {
  return (
    <div className={`cart-popover ${mobile ? "cart-popover-mobile" : ""}`}>
      <h2>Cart</h2>
      <div className="cart-content">
        {quantity === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-product">
              <Image src={products[0].thumbnail} alt="" width={50} height={50} />
              <div>
                <p>Fall Limited Edition Sneakers</p>
                <span>$125.00 x {quantity} <strong>${(125 * quantity).toFixed(2)}</strong></span>
              </div>
              <button type="button" aria-label="Remove item" onClick={onDelete}><IconTrash size={18} /></button>
            </div>
            <button type="button" className="checkout-button">Checkout</button>
          </>
        )}
      </div>
    </div>
  );
}
