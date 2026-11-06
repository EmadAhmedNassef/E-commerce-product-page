import { IconMinus, IconPlus } from "@tabler/icons-react";

export default function QuantityControl({ quantity, onDecrease, onIncrease }) {
  return (
    <div className="quantity-control">
      <button type="button" aria-label="Decrease quantity" onClick={onDecrease}>
        <IconMinus size={18} stroke={3} />
      </button>
      <strong>{quantity}</strong>
      <button type="button" aria-label="Increase quantity" onClick={onIncrease}>
        <IconPlus size={18} stroke={3} />
      </button>
    </div>
  );
}
