import { Drawer } from "@mantine/core";
import { navItems } from "./productData";

export default function MobileMenu({ opened, onClose }) {
  return (
    <Drawer opened={opened} onClose={onClose} size={250} withCloseButton classNames={{ content: "mobile-menu", body: "mobile-menu-body" }}>
      <nav aria-label="Mobile navigation">{navItems.map((item) => <a href="#" key={item}>{item}</a>)}</nav>
    </Drawer>
  );
}
