import Image from "next/image";
import { IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react";
import { Modal } from "@mantine/core";
import { products } from "./productData";

export default function Lightbox({ opened, selected, setSelected, onClose }) {
  const goTo = (direction) => {
    setSelected((current) => (current + direction + products.length) % products.length);
  };

  return (
    <Modal opened={opened} onClose={onClose} centered withCloseButton={false} size="auto" padding={0} classNames={{ content: "lightbox-modal", body: "lightbox-body", overlay: "lightbox-overlay" }}>
      <div className="lightbox">
        <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close gallery"><IconX size={28} /></button>
        <button type="button" className="lightbox-arrow lightbox-arrow-left" onClick={() => goTo(-1)} aria-label="Previous image"><IconChevronLeft size={28} /></button>
        <div className="lightbox-image"><Image src={products[selected].image} alt={`Product image ${selected + 1}`} fill sizes="(max-width: 700px) 90vw, 520px" /></div>
        <button type="button" className="lightbox-arrow lightbox-arrow-right" onClick={() => goTo(1)} aria-label="Next image"><IconChevronRight size={28} /></button>
        <div className="lightbox-thumbnails">
          {products.map((product, index) => (
            <button type="button" className={`thumbnail ${selected === index ? "thumbnail-active" : ""}`} key={product.thumbnail.src} onClick={() => setSelected(index)} aria-label={`Show image ${index + 1}`}>
              <Image src={product.thumbnail} alt="" fill />
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
}
