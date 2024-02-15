import Carousel from './Carousel';
import masterData from '../utils/dummyData';

const CarouselItem = () => {
  console.log("CarouselItem", masterData[0]);

  return (
    <Carousel 
      images={masterData[0]?.imageGridCards?.info.map(item => (
        `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`
      ))}
    />
  );
};

export default CarouselItem;
