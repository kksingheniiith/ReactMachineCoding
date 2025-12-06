import { useState } from "react";
import Image from "./image";

function ImageSlider({ images }) {
  const [active, setActive] = useState(0);
  return (
    <div className="image-slider">
      {images.map((image, index) => {
        return <Image key={image.name} {...image} active={active === index} />;
      })}
      <div className="bullets">
        {images.map((image, index) => {
          return <div key={image.name} className={`bullet ${active === index ? "active" : ""}`} onClick={() => {setActive(index)}}></div>;
        })}
      </div>
    </div>
  );
}

export default ImageSlider;
