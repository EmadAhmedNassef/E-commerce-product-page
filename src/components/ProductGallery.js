import Image from "next/image";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { products } from "./productData";

export default function ProductGallery({ selected, setSelected, onOpenLightbox }) {
  const goTo = (direction) => {
    setSelected((current) => (current + direction + products.length) % products.length);
  };

  return (
    <div className="gallery">
      <div className="main-image-wrap">
        <button className="gallery-arrow gallery-arrow-left" onClick={() => goTo(-1)} aria-label="Previous image">
          <IconChevronLeft size={25} stroke={2.5} />
        </button>
        <button className="main-image-button" onClick={onOpenLightbox} aria-label="Open product image gallery">
          <Image src={products[selected].image} alt={`Fall Limited Edition Sneakers view ${selected + 1}`} fill priority />
        </button>
        <button className="gallery-arrow gallery-arrow-right" onClick={() => goTo(1)} aria-label="Next image">
          <IconChevronRight size={25} stroke={2.5} />
        </button>
      </div>
      <div className="thumbnails">
        {products.map((product, index) => (
          <button type="button" className={`thumbnail ${selected === index ? "thumbnail-active" : ""}`} key={product.thumbnail.src} onClick={() => setSelected(index)} aria-label={`Show product image ${index + 1}`}>
            <Image src={product.thumbnail} alt="" fill />
          </button>
        ))}
      </div>
    </div>
  );
}
