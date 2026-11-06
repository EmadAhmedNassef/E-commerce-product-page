"use client";

import Image from "next/image";
import { useState } from "react";
import { IconMenu2, IconShoppingCart } from "@tabler/icons-react";
import avatar from "../images/image-avatar.png";
import logo from "../images/logo.svg";
import Cart from "../components/Cart";
import Lightbox from "../components/Lightbox";
import MobileMenu from "../components/MobileMenu";
import ProductGallery from "../components/ProductGallery";
import QuantityControl from "../components/QuantityControl";
import { navItems } from "../components/productData";

export default function Home() {
  const [selected, setSelected] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const changeQuantity = (amount) => setQuantity((current) => Math.max(0, current + amount));

  return (
    <main className="site-shell">
      <header className="site-header">
        <button className="mobile-menu-button" type="button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><IconMenu2 size={24} /></button>
        <Image src={logo} className="logo" alt="sneakers" width={138} height={25} priority />
        <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map((item) => <a href="#" key={item}>{item}</a>)}</nav>
        <div className="header-actions">
          <button type="button" className={`cart-button ${cartOpen ? "cart-button-active" : ""}`} onClick={() => setCartOpen((open) => !open)} aria-label="Open cart">
            <IconShoppingCart size={23} stroke={1.8} />{quantity > 0 && <span className="cart-count">{quantity}</span>}
          </button>
          <Image className="avatar" src={avatar} alt="Your account" width={44} height={44} />
        </div>
        {cartOpen && <Cart quantity={quantity} onDelete={() => setQuantity(0)} />}
      </header>

      <section className="product-layout">
        <ProductGallery selected={selected} setSelected={setSelected} onOpenLightbox={() => setLightboxOpen(true)} />
        <div className="product-details">
          <p className="eyebrow">Sneaker Company</p>
          <h1>Fall Limited Edition Sneakers</h1>
          <p className="description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.</p>
          <div className="price-row"><strong>$125.00</strong><span>50%</span><del>$250.00</del></div>
          <div className="purchase-row">
            <QuantityControl quantity={quantity} onDecrease={() => changeQuantity(-1)} onIncrease={() => changeQuantity(1)} />
            <button type="button" className="add-button" onClick={() => setQuantity((current) => current || 1)}><IconShoppingCart size={20} stroke={2} />Add to cart</button>
          </div>
        </div>
      </section>

      <MobileMenu opened={menuOpen} onClose={() => setMenuOpen(false)} />
      <Lightbox opened={lightboxOpen} selected={selected} setSelected={setSelected} onClose={() => setLightboxOpen(false)} />
      {cartOpen && <div className="mobile-cart"><Cart quantity={quantity} onDelete={() => setQuantity(0)} mobile /></div>}
    </main>
  );
}
