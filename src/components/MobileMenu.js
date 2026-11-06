import { IconX } from "@tabler/icons-react";
import { navItems } from "./productData";

export default function MobileMenu({ opened, onClose }) {
  if (!opened) return null;

  return (
    <div className="mobile-menu-overlay" onClick={onClose}>
      <aside className="mobile-menu" onClick={(event) => event.stopPropagation()}>
        <button type="button" onClick={onClose} aria-label="Close menu"><IconX size={25} /></button>
        <nav aria-label="Mobile navigation">{navItems.map((item) => <a href="#" key={item}>{item}</a>)}</nav>
      </aside>
    </div>
  );
}
