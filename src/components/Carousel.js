import React from 'react';
import { IMG_URL } from "../utils/config";

const Carousel = ({ img }) => {
  return (
    <div className="Carousel">
      <div>
        <img 
          src={IMG_URL + img}
          alt="Carouselimg"
          width="150px"
          style={{ height: "auto", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

export default Carousel;
